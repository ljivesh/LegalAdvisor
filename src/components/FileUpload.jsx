// FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.post('http://lab-wise-burro.ngrok-free.app/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully!');
      buildDatabase();
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };


  const buildDatabase = async () => {
    try {
      await axios.post('http://lab-wise-burro.ngrok-free.app/db_build/');
      alert('Database build ran successfully!');
    } catch (error) {
      console.error('Error building database:', error);
    }
  };

  return (
    <div className="file-upload-container">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
