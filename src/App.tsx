import React, { useState } from 'react';
import { Button, Message } from 'semantic-ui-react';
import './App.css';
import { bookList } from './BookStates/Types/BookList';
import { bookState } from './BookStates/Types/BookState';
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

  const forwardBookState = (id: number): void => {
    setBooks(books.map((book) => {
      if (book.id !== id) {
        return book;
      }

      return {
        id: book.id,
        name: book.name,
        state: {
          id: book.state.id + 1,
          name: states.find(
            (state) => state.id === book.state.id + 1,
          )?.name ?? initState.name,
        },
      };
    }));
  };

  const backwardBookState = (id: number): void => {
    setBooks(books.map((book) => {
      if (book.id !== id) {
        return book;
      }

      return {
        id: book.id,
        name: book.name,
        state: {
          id: book.state.id - 1,
          name: states.find(
            (state) => state.id === book.state.id - 1,
          )?.name ?? initState.name,
        },
      };
    }));
  };

  return (
    <div className="App">
      <Message
        header="読みたい本を追加しましょう！"
        content={(
          <>
            <InputText
              name={name}
              handleOnChange={handleOnChange}
            />
            <Button
              primary
              onClick={() => handleOnClick()}
            >
              追加
            </Button>
          </>
        )}
      />
      <StateList
        books={books}
        states={states}
        forwardBookState={forwardBookState}
        backwardBookState={backwardBookState}
      />
    </div>
  );
};

export default App;
