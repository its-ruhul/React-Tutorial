import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/ruhul-profile.jpg'
import './ChatMessage.css'

export function ChatMessage({message, sender, timeStamp}) {

  //consst message = props.message;
  //const sender = props.sender;
  //const {message, sender} = props;      //deconstructing

  /*
  if (sender === 'robot') {
    return (
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    )
  }
  */

  return (
    <div
      className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}
    >

      {sender === 'robot' && 
        <img src={RobotProfileImage} className="chat-message-profile" />
      }

      <div className="chat-message-text">
        {message}

        <div className="time-stamp">
          {timeStamp}
        </div>
        
      </div>

      {sender === 'user' && 
        <img src={UserProfileImage} className="user-message-profile" />
      }
    </div>
  );
}