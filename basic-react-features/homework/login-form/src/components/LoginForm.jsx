import TextBox from './TextBox'
import SignUpButton from './SignUpButton'
import LoginButton from './LoginButton'

export function LoginForm() {

  return (
      <>
          <h2>Hello, welcome to my website</h2> 
          <TextBox formType='email' />
          <TextBox formType='password' />
          <LoginButton /> <SignUpButton />
      </>
  );
}