import React, { useState } from 'react';
import { Header } from './components/Header';
import { FileUpload } from './components/FileUpload';
import { PredictionTable } from './components/PredictionTable';
import { ErrorMessage } from './components/ErrorMessage';
import { predictGait } from './services/api';

function App() {
  const [files, setFiles] = useState([]);
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setPredictions(null);
    setError(null);
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      setError("Please select files first");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await predictGait(files);
      setPredictions(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearFiles = () => {
    setFiles([]);
    setPredictions(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-sage-dark text-sage-secondary p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <FileUpload
          files={files}
          onFileSelect={handleFileSelect}
          onClearFiles={clearFiles}
          onSubmit={handleSubmit}
          loading={loading}
        />
        <ErrorMessage message={error} />
        <PredictionTable predictions={predictions} />
      </div>
    </div>
  );
}

export default App;
