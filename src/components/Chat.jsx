// Chat.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleQuerySubmit = async () => {
    setLoading(true);

    const formData = new FormData();
formData.append('query', query);
    
    try {
      const response = await axios.post('http://lab-wise-burro.ngrok-free.app/model/',
      formData);
    // console.log(`request send with payload: ${jsonQuery}`);
    console.log(response);

      // Add the user query and AI response to the chat history
      const updatedChatHistory = [...chatHistory, { user: query, ai: response.data[0].result }];
      setChatHistory(updatedChatHistory);

      setResponse(response.data[0]);
    } catch (error) {
      console.error('Error fetching response:', error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    const chatInterface = document.getElementById('chat-interface');
    chatInterface.scrollTop = chatInterface.scrollHeight;
  }, [chatHistory]);

  return (
    <div className="chat-container">
      <div id="chat-interface" className="chat-interface">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.user ? 'user-chat' : 'ai-chat'}`}>
            <div className="user-message"><span className='user'>User:</span> {message.user}</div>
            <div className="ai-message"><span className='user'>AtorLee:</span> {message.ai}</div>
          </div>
        ))}
      </div> 
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='send-button' onClick={handleQuerySubmit} disabled={loading}>
          Send
        </button>
      </div>
        {loading && <p>Getting response from model please wait....</p>}
        
    </div>
  );
}

export default Chat;
