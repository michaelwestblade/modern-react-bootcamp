import { ChangeEvent, useState } from 'react';

export const useInputState = (initialValue: string): [string, (event: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [value, setValue] = useState( initialValue );
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget?.value);
  }

  const reset = () => {
    setValue("")
  }
  return [value, handleChange, reset];
}
