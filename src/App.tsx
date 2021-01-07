import React, { useState } from 'react';
import './App.css';
import ClickButton from './Components/ClickButton';
import BookList, { bookList } from './Books/BookList';
import InputText from './Components/InputText';
import StateList from './BookStates/StateList';

const App: React.FC = () => {
  const [books, setBooks] = useState<bookList[]>([
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
    setBooks(
      [
        ...books,
        {
          id: Math.max(...books.map((book) => book.id)) + 1,
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
      <BookList itemList={books} />
      <StateList books={books} />
    </div>
  );
};

export default App;
