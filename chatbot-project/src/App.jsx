import {useState} from 'react'                          //named exports
import {ChatInput} from './components/ChatInput'        //named exports
import ChatMessages from './components/ChatMessages';   //default exports

import './App.css'

function App() {

  const [chatMessages, setChatMessages] = useState([]);
  
  //const [chatMessages, setChatMessages] = array;

  //const chatMessages = array[0];
  //const setChatMessages = array[1];    //Updater function (starts with set)

  return (
    <div className="app-container">
      <ChatMessages 
        chatMessages={chatMessages}
      />

      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
