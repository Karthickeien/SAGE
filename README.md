# SAGE - Sensor-Assisted Gait Evaluation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![React 18](https://img.shields.io/badge/react-18.0%2B-61DAFB?logo=react)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/flask-2.0%2B-black?logo=flask)](https://flask.palletsprojects.com/)
[![TensorFlow](https://img.shields.io/badge/tensorflow-2.0%2B-FF6F00?logo=tensorflow)](https://www.tensorflow.org/)
[![Vite](https://img.shields.io/badge/vite-4.0%2B-646CFF?logo=vite)](https://vitejs.dev/)

## 📝 Project Overview
SAGE (Sensor-Assisted Gait Evaluation) is a platform built with React, Flask, and Tailwind CSS that leverages machine learning to analyze and classify different types of gait patterns using Movella Xsense Dot sensor data. The system processes CSV files containing sensor data and provides real-time predictions for various walking patterns and movements.

## Features

-  Real-time gait pattern classification
-  Support for multiple CSV file processing
-  Batch prediction capabilities
-  Responsive web interface
-  High-accuracy CNN-based model
- Built-in file validation and error handling
  
# Tech Stack

## Frontend
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Lucide](https://img.shields.io/badge/Lucide-Icons-%23000000.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZlYXRoZXIiPjxwYXRoIGQ9Ik0yMC4yNCAyLjE5YTEgMSAwIDAgMC0xLjQxIDBsLTE4IDE4YTEgMSAwIDEgMCAxLjQxIDEuNDFsMTgtMThhMSAxIDAgMCAwIDAtMS40MXoiPjwvcGF0aD48L3N2Zz4=)](https://lucide.dev/)

## Backend
[![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)](https://www.tensorflow.org/)
[![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/)
[![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)](https://numpy.org/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)

## Development Tools
[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)

## Package Managers
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![PyPI](https://img.shields.io/badge/PyPI-%233775A9.svg?style=for-the-badge&logo=pypi&logoColor=white)](https://pypi.org/)

## 🚀 Installation and Setup

### Prerequisites
- Python 3.8 or higher
- Node.js 14.0 or higher
- npm or yarn

### Backend Setup

1. Clone the repository
```bash
git clone https://github.com/Karthickeien/SAGE.git
cd SAGE/backend
```

2. Create and activate a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the backend directory:
```env
SECRET_KEY=your_secret_key_here
```

5. Start the Flask server
```bash
python run.py
```

### Frontend Setup

1. Navigate to the frontend directory
```bash
cd ../frontend
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

## 🎯 Supported Gait Classifications

The system can classify the following gait patterns:
- Walking (Normal)
- 8_Walking (Figure-8 Pattern)
- Reverse Walking
- Jumping
- Stairs Up
- Stairs Down

## 📂  File Structure

### Backend Structure

```bash
backend/
├── app/
│   ├── routes/
│   │   └── prediction.py
│   ├── services/
│   │   └── prediction_service.py
│   ├── utils/
│   │   └── data_processor.py
│   └── config.py
├── models/
│   └── best_model_new_CNN_custom.keras
└── run.py
```

#### Backend Documentation

1. **prediction.py** (Routes)
```python
# Key Components:
- Blueprint creation for prediction routes
- File validation middleware
- POST endpoint '/predict' for handling predictions
- Error handling for file uploads
- Response formatting

# Main Functions:
- predict(): Handles POST requests for predictions
- Validates uploaded files
- Processes multiple files simultaneously
- Returns JSON response with predictions
```

2. **prediction_service.py** (Services)
```python
# Key Components:
- PredictionService class for ML model operations
- Model loading and initialization
- Data preprocessing pipeline
- Prediction generation

# Main Functions:
- process_files(): Processes uploaded files
- _load_model(): Loads TensorFlow model
- _preprocess_data(): Scales and prepares data

# Class Mapping:
{
    0: "8_Walking",
    1: "Jumping",
    2: "Reverse_Walking",
    3: "Stairs_Down",
    4: "Stairs_Up",
    5: "Walking"
}
```

3. **data_processor.py** (Utils)
```python
# Key Components:
- File validation functions
- Data processing utilities
- NumPy array operations
- Pandas DataFrame handling

# Main Functions:
- allowed_file(): Validates file extensions
- process_data(): Processes CSV files
  - Removes unnecessary columns
  - Handles data padding
  - Normalizes data
```

4. **config.py** (Configuration)
```python
# Key Components:
- Environment variable configuration
- File upload settings
- Security configurations
- Path definitions

# Main Settings:
- UPLOAD_FOLDER: File upload directory
- MAX_CONTENT_LENGTH: 16MB file size limit
- ALLOWED_EXTENSIONS: {csv}
- MODEL_PATH: Path to keras model
```

### Frontend Structure

```bash
frontend/
├── src/
│   ├── components/
│   │   ├── FileUpload.jsx
│   │   ├── Header.jsx
│   │   ├── PredictionTable.jsx
│   │   └── ErrorMessage.jsx
│   ├── App.jsx
│   └── main.jsx
```

#### Frontend Documentation

1. **FileUpload.jsx**
```javascript
// Key Components:
- File upload interface
- Drag and drop functionality
- File list management
- Upload status indicators

// Props:
- files: Array of selected files
- onFileSelect: File selection handler
- onClearFiles: Clear files handler
- onSubmit: Form submission handler
- loading: Loading state indicator
```

2. **Header.jsx**
```javascript
// Key Components:
- Application header
- Logo integration
- Title display

// Features:
- Responsive design
- SAGE branding
- Clean, professional layout
```

3. **PredictionTable.jsx**
```javascript
// Key Components:
- Results display table
- Prediction data formatting
- Responsive table layout

// Props:
- predictions: Array of prediction results
  {
    filename: string,
    predicted_class: number,
    class_label: string
  }
```

4. **ErrorMessage.jsx**
```javascript
// Key Components:
- Error message display
- Alert styling
- Conditional rendering

// Props:
- message: Error message string
```

5. **App.jsx**
```javascript
// Key Components:
- Main application state management
- Component coordination
- API integration
- Error handling

// State Management:
- files: Selected files
- predictions: Prediction results
- loading: Loading state
- error: Error state
```

### Environment Files

1. **Backend .env**
```env
SECRET_KEY=your_secret_key_here
```

2. **Frontend .env**
```env
VITE_API_URL=http://localhost:5000/api
```

## 🔄 Data Flow Process

1. **File Upload**
   - User selects CSV files through FileUpload component
   - Files are validated on frontend
   - FileUpload component updates App state

2. **Data Processing**
   - Files sent to backend via API
   - data_processor.py validates and processes files
   - Data is normalized and padded

3. **Prediction Generation**
   - prediction_service.py loads model
   - Processed data is fed through CNN
   - Predictions are generated

4. **Response Handling**
   - Results are formatted and sent to frontend
   - PredictionTable displays results
   - Error handling at each step


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨🏻‍💻 Contributors

[Karthickeien](https://github.com/Karthickeien)
[Govardhanan-N](https://github.com/Govardhanan-N)

### Project Links
- Repository: [https://github.com/Karthickeien/SAGE.git](https://github.com/Karthickeien/SAGE.git)
- Issues: [https://github.com/Karthickeien/SAGE/issues](https://github.com/Karthickeien/SAGE/issues)
