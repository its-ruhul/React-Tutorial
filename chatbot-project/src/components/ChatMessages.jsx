import {useAutoScroll} from "./useAutoScroll"
import {ChatMessage} from './ChatMessage'
import dayjs from 'dayjs'
import './ChatMessages.css'

function ChatMessages({chatMessages}) {

  const chatMessagesRef = useAutoScroll(chatMessages);
  /*
  const chatMessagesRef = React.useRef(null);

  React.useEffect(() => {
    const containerElem = chatMessagesRef.current;

    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  */

  const time = dayjs().valueOf();

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message}
            sender={chatMessage.sender}
            timeStamp = {dayjs(time).format('HH:mm')}
            key={chatMessage.id}            //a unique key is encouraged in React to render using arrays
          />
        );
      })}

      {chatMessages.length === 0 && 
        <div className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below.
        </div>
      }
    </div>
  );
}

export default ChatMessages;