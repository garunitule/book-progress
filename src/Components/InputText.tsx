import React from 'react';

type Props = {
  name: string;
  handleOnChange: (name: string) => void
};

const InputText: React.FC<Props> = ({ name, handleOnChange }) => (
  <>
    Name:
    <input type="text" value={name} onChange={(e) => handleOnChange(e.target.value)} />
  </>
);

export default InputText;
