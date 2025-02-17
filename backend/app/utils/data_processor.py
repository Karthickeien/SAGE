import pandas as pd
import numpy as np
from flask import current_app
import os

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in current_app.config['ALLOWED_EXTENSIONS']

def process_data(files):
    X = []
    filenames = []
    max_rows = 0
    
    # First pass to find maximum rows
    for file in files:
        df = pd.read_csv(file)
        df = df.drop(columns=['SampleTimeFine'], errors='ignore')
        max_rows = max(max_rows, df.shape[0])
        file.seek(0)  # Reset file pointer
    
    # Second pass to load and pad data
    for file in files:
        df = pd.read_csv(file)
        df = df.drop(columns=['SampleTimeFine'], errors='ignore')
        
        # Pad with zeros to match the largest dataframe
        if df.shape[0] < max_rows:
            padding = np.zeros((max_rows - df.shape[0], df.shape[1]))
            df_padded = np.vstack((df.values, padding))
        else:
            df_padded = df.values
            
        X.append(df_padded)
        filenames.append(file.filename)
    
    return np.array(X), filenames