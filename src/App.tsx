import React, { useState } from 'react';
import './App.css';
import List, { list } from './Books/List';
import InputText from './Components/InputText';

const App: React.FC = () => {
  const bookList: list[] = [
    {
      id: 1,
      name: 'react入門',
    },
  ];

  const [name, setName] = useState<string>('');

  const handleOnChange = (bookName: string): void => {
    setName(bookName);
  };

  return (
    <div className="App">
      <InputText
        name={name}
        handleOnChange={handleOnChange}
      />
      <List itemList={bookList} />
    </div>
  );
};

export default App;
