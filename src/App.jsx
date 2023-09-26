// App.js
import React from 'react';
import './App.css'; // Import the main CSS file
import FileUpload from './components/FileUpload';
import Chat from './components/Chat';
import ResetButton from './components/ResetButton';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Legal Advisor AI Chat App</h1>
      <FileUpload />
      <Chat />
      <ResetButton />
    </div>
  );
}

export default App;
