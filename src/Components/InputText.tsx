import React, { useState } from 'react';

const InputText: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <>
      Name:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default InputText;
