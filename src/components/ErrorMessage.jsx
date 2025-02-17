import React from 'react';

export const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mb-8 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
      {message}
    </div>
  );
};