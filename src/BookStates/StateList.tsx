import React from 'react';
import { List } from 'semantic-ui-react';
import State from './State';
import { bookList } from '../Books/BookList';
import { bookState } from '../Books/BookItem';

type Props = {
  books: bookList[];
  states: bookState[];
};

const StateList: React.FC<Props> = ({ books, states }) => {
  const bookStates = states.map((state) => (
    <List.Item key={state.name}>
      <p>{state.name}</p>
      <List.Content>
        <State
          books={books.filter((book) => book.state.name === state.name)}
        />
      </List.Content>
    </List.Item>
  ));

  return (
    <>
      <List horizontal>
        {bookStates}
      </List>
    </>
  );
};

export default StateList;
