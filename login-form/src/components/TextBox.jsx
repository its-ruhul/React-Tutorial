import {useState} from 'react'
import './TextBox.css'
import './Buttons.css'

function TextBox({formType}) {

  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {

    if (showPassword) {
      setShowPassword(false);
    }
    else {
      setShowPassword(true);
    }
  }

  return (
    <div>
      {formType === 'email' && 
        <input placeholder="Email" className="email-textbox"/>
      }

      {formType === 'password' && 
        <>
          <input
            placeholder="Password"
            className="password-textbox"
            type= {showPassword ? 'text' : 'password'}
          />
          <button
            onClick={toggleShowPassword}
            className="show-password-button"
          >
            {showPassword ? 'hide' : 'show'}
          </button>
        </>
      }
    </div>
  );
}

export default TextBox
      