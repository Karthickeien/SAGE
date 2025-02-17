# prediction.py
from flask import Blueprint, request, jsonify, current_app
from werkzeug.utils import secure_filename
import os
from app.services.prediction_service import PredictionService
from app.utils.data_processor import allowed_file

bp = Blueprint('prediction', __name__)
prediction_service = PredictionService()

@bp.route('/predict', methods=['POST'])
def predict():
    if 'files' not in request.files:
        return jsonify({'error': 'No files provided'}), 400
    
    files = request.files.getlist('files')
    if not files:
        return jsonify({'error': 'No files selected'}), 400
    
    # Validate files
    for file in files:
        if file.filename == '':
            return jsonify({'error': 'Empty filename'}), 400
        if not allowed_file(file.filename):
            return jsonify({'error': f'Invalid file type: {file.filename}'}), 400
    
    try:
        # Model loading and prediction happens within application context
        results = prediction_service.process_files(files)
        return jsonify({'results': results})
    except Exception as e:
        return jsonify({'error': str(e)}), 500