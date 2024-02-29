import { useState } from 'react';

export const ChangeContext = (value: any) => {
  const [changeContext, setChangeContext] = useState();
  const handleChange = () => {
    setChangeContext(value);
  };
};
