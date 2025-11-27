import React from 'react';
import './loadingSpinner.scss';

const LoadingSpinner = ({width, height}) => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__circle" style={{width: width, height: height}}></div>
    </div>
  );
};

export default LoadingSpinner;