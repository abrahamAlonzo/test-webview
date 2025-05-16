import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      <h2>Send Message to React Native WebView</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
      </header>
    </div>
  );
}

export default App;
