import React from 'react';
import { List } from 'semantic-ui-react';
import State from './State';
import { bookList } from '../Books/BookList';

type Props = {
  books: bookList[];
};

const StateList: React.FC<Props> = ({ books }) => {
  const bookStates = books.map((book) => (
    <List.Item>
      <List.Content>
        <State book={book} />
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
