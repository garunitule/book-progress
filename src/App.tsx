import React, { useState } from 'react';
import './App.css';
import ClickButton from './Components/ClickButton';
import List, { list } from './Books/List';
import InputText from './Components/InputText';

const App: React.FC = () => {
  const [bookList, setBookList] = useState<list[]>([
    {
      id: 1,
      name: 'react入門',
    },
  ]);

  const [name, setName] = useState<string>('');

  const handleOnChange = (bookName: string): void => {
    setName(bookName);
  };

  const handleOnClick = (): void => {
    setBookList(
      [
        ...bookList,
        {
          id: Math.max(...bookList.map((book) => book.id)) + 1,
          name,
        },
      ],
    );
  };

  return (
    <div className="App">
      <InputText
        name={name}
        handleOnChange={handleOnChange}
      />
      <ClickButton text="保存" handleOnClick={handleOnClick} />
      <List itemList={bookList} />
    </div>
  );
};

export default App;
