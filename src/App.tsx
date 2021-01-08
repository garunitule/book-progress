import React, { useState } from 'react';
import './App.css';
import ClickButton from './Components/ClickButton';
import { bookList } from './Books/BookList';
import { bookState } from './Books/BookItem';
import InputText from './Components/InputText';
import StateList from './BookStates/StateList';

const initState: bookState = {
  id: 1,
  name: '欲しい',
};
const secondState: bookState = {
  id: 2,
  name: '読みたい',
};

const states: bookState[] = [
  initState,
  secondState,
  {
    id: 3,
    name: '読書中',
  },
  {
    id: 4,
    name: '読書完了',
  },
  {
    id: 5,
    name: 'アウトプット完了',
  },
];

const App: React.FC = () => {
  const [books, setBooks] = useState<bookList[]>([
    {
      id: 1,
      name: 'react入門',
      state: initState,
    },
    {
      id: 2,
      name: 'vue入門',
      state: secondState,
    },
    {
      id: 3,
      name: 'Angular入門',
      state: initState,
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
          state: initState,
        },
      ],
    );
  };

  return (
    <div className="App">
      <div>
        <InputText
          name={name}
          handleOnChange={handleOnChange}
        />
        <ClickButton text="保存" handleOnClick={handleOnClick} />
      </div>
      <StateList books={books} states={states} />
    </div>
  );
};

export default App;
