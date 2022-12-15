import { ChangeEvent, useState } from 'react';
import { useInputState } from './hooks/useInputState';

export const SimpleFormHooks = () => {
  const [email, setEmail, resetEmail] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");
  return <div>
    <h1>The value is...</h1>
    <input type="text" value={email} onChange={setEmail}/>
    <input type="text" value={password} onChange={setPassword}/>
    <button onClick={resetEmail}>Reset email</button>
    <button onClick={resetPassword}>Reset Password</button>
    <pre>EMAIL: {email} & PASSWORD: {password}</pre>
  </div>
}
