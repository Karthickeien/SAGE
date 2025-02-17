import React from 'react';
import logo from '../assets/SAGE_Logo.png';
export const Header = () => {
  return (
    <div className="flex items-center space-x-4 mb-8 p-4">
      <img 
        src= {logo} 
        alt="SAGE Logo" 
        className="w-24 h-24"
      />
      <h1 className="text-3xl font-bold text-sage-secondary">
        SAGE - Sensor-Assisted Gait Evaluation
      </h1>
    </div>
  );
};