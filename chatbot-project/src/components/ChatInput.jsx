import { useState } from 'react'
import { Chatbot} from 'supersimpledev'
import loadingGIF from '../assets/loading-spinner.gif'
import dayjs from 'dayjs'
import './ChatInput.css';

//Components in React should be in PascalCase and camelCase
export function ChatInput({chatMessages, setChatMessages}) {

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {

    if (inputText !== '' && isLoading === false){
    
      setInputText('');
      setIsLoading(true);

      const time = dayjs().valueOf();

      const newChatMessages = [
        ...chatMessages,
        {
          message: inputText,
          sender: 'user',
          timeStamp: dayjs(time).format('HH:mm'),
          id: crypto.randomUUID()
        }                   
      ];

      setChatMessages([
        ...newChatMessages, {
          message: <img src={loadingGIF} className="loading-gif"/>,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);

      const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        timeStamp: dayjs(time).format('HH:mm'),
        id: crypto.randomUUID()
      }                   
    ]);

    //localStorage.setItem('messages', JSON.stringify(chatMessages));

    setIsLoading(false);
    }
  }

  function enterMessage() {
    if (event.key === 'Enter'){
      sendMessage();
    }

    if (event.key === 'Escape'){
      setInputText('');
    }
  }

  return (

    //<> and </> is a fragment
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={enterMessage}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}
