// ResetButton.js
import React from 'react';
import axios from 'axios';

function ResetButton() {
  const handleReset = async () => {
    try {
      await axios.post('http://lab-wise-burro.ngrok-free.app/delete_temp_upload/');
      alert('temp_upload directory and its contents deleted successfully!');
    } catch (error) {
      console.error('Error deleting temp_upload:', error);
    }
  };

  return (
    <div className='reset'>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default ResetButton;
