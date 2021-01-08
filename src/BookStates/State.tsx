import React from 'react';
import { Menu } from 'semantic-ui-react';
import { bookList } from '../Books/BookList';

type Props = {
  books: bookList[];
  stateName: string;
};

const StateList: React.FC<Props> = ({ books, stateName }) => (
  <>
    <Menu fluid vertical key={stateName}>
      <Menu.Item className="header">{stateName}</Menu.Item>
      {
        books.map((book) => (
          <Menu.Item key={book.id}>
            {book.name}
            の読書進捗は「
            {book.state.name}
            」です
          </Menu.Item>
        ))
      }
    </Menu>
  </>
);

export default StateList;
