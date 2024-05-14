// src/components/Dashboard.jsx
import React from 'react';


const Border = () => {
  return (
    <div className="flex justify-between">
      <Square />
      <div className="w-50 md:0 bg-green-500"></div> {/* Green space */}
      <Square />
    </div>
  );
};

export default Border;
