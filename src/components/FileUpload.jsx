import React from 'react';
import { Upload, X } from 'lucide-react';

export const FileUpload = ({ 
  files, 
  onFileSelect, 
  onClearFiles, 
  onSubmit, 
  loading 
}) => {
  return (
    <div className="mb-8">
      <div className="border-2 border-dashed border-sage-primary rounded-lg p-8 text-center">
        <input
          type="file"
          multiple
          accept=".csv"
          onChange={onFileSelect}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-flex items-center space-x-2 text-sage-primary hover:text-sage-secondary"
        >
          <Upload className="w-6 h-6" />
          <span>Select CSV Files</span>
        </label>
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-sage-secondary">
              Selected Files:
            </h3>
            <button
              onClick={onClearFiles}
              className="text-red-400 hover:text-red-300 flex items-center"
            >
              <X className="w-4 h-4 mr-1" />
              Clear All
            </button>
          </div>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="bg-sage-dark/50 p-2 rounded">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={onSubmit}
        disabled={loading || files.length === 0}
        className={`mt-4 px-6 py-2 rounded-lg bg-sage-primary text-sage-dark font-semibold
          ${loading || files.length === 0 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-sage-secondary'}`}
      >
        {loading ? 'Processing...' : 'Run Predictions'}
      </button>
    </div>
  );
};