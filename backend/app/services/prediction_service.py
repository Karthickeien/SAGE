# prediction_service.py
from flask import current_app
from tensorflow.keras.models import load_model
from sklearn.preprocessing import StandardScaler
import numpy as np
from app.utils.data_processor import process_data

class PredictionService:
    def __init__(self):
        self.model = None
        self.scaler = StandardScaler()
        self.class_labels = {
            0: "8_Walking",
            1: "Jumping",
            2: "Reverse_Walking",
            3: "Stairs_Down",
            4: "Stairs_Up",
            5: "Walking"
        }
    
    def _load_model(self):
        if self.model is None:
            self.model = load_model(current_app.config['MODEL_PATH'])
    
    def process_files(self, files):
        # Ensure model is loaded within application context
        self._load_model()
        
        # Process and validate data
        X_test, filenames = process_data(files)
        
        if X_test is None or X_test.shape[0] == 0:
            raise ValueError('Error processing data')
        
        # Preprocess data
        X_test_scaled = self._preprocess_data(X_test)
        if X_test_scaled is None:
            raise ValueError('Error preprocessing data')
        
        # Make predictions
        y_pred = self.model.predict(X_test_scaled)
        y_pred_classes = np.argmax(y_pred, axis=1)
        
        # Prepare results
        results = []
        for filename, pred_class in zip(filenames, y_pred_classes):
            results.append({
                'filename': filename,
                'predicted_class': int(pred_class),
                'class_label': self.class_labels[int(pred_class)]
            })
        
        return results
    
    def _preprocess_data(self, X_test):
        if len(X_test.shape) != 3:
            return None
            
        num_samples, timesteps, num_features = X_test.shape
        X_test_reshaped = X_test.reshape(-1, num_features)
        X_test_scaled = self.scaler.fit_transform(X_test_reshaped)
        return X_test_scaled.reshape(num_samples, timesteps, num_features)
