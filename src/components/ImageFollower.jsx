import React, { useState, useEffect } from 'react';
import logo from '../assets/hero/logo.svg'

const ImageFollower = () => {
  

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        zIndex:100,
        width: '400px',
        height: '400px',
        border: '1px solid black',
        overflow: 'hidden',
      }}
    >
      
    </div>
  );
};

export default ImageFollower;
