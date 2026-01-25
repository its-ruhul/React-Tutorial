import {useState, useEffect} from 'react'               //named exports
import {ChatInput} from './components/ChatInput'        //named exports
import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages';   //default exports

import './App.css'

function App() {

  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    Chatbot.addResponses({
      'who create': 'Ruhul created me with the help of React Tutorial by SuperSimpleDev',
      'most beautiful': 'Priyanshi is the most beautiful girl in the world'
    });
  }, [chatMessages]);
  
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
