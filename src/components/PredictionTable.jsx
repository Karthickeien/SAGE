import React from 'react';

export const PredictionTable = ({ predictions }) => {
  if (!predictions) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-sage-secondary/10">
            <th className="px-4 py-2 text-left">File</th>
            <th className="px-4 py-2 text-left">Predicted Class</th>
            <th className="px-4 py-2 text-left">Class Label</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((prediction, index) => (
            <tr 
              key={index}
              className="border-b border-sage-secondary/10 hover:bg-sage-secondary/5"
            >
              <td className="px-4 py-2">{prediction.filename}</td>
              <td className="px-4 py-2">{prediction.predicted_class}</td>
              <td className="px-4 py-2">{prediction.class_label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
