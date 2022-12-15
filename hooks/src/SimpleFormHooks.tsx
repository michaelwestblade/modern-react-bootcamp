import { ChangeEvent, useState } from 'react';
import { useInputState } from './hooks/useInputState';

export const SimpleFormHooks = () => {
  const [email, setEmail] = useInputState("");
  return <div>
    <h1>The value is...</h1>
    <input type="text" value={email} onChange={setEmail}/>
    <pre>{email}</pre>
  </div>
}
