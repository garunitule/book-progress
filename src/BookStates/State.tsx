import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { bookList } from '../Books/BookList';

type Props = {
  books: bookList[];
  stateName: string;
  forwardBookState: (id: number) => void;
  backwardBookState: (id: number) => void;
};

const StateList: React.FC<Props> = ({
  books,
  stateName,
  forwardBookState,
  backwardBookState,
}) => (
  <Menu fluid vertical key={stateName}>
    <Menu.Item className="header">{stateName}</Menu.Item>
    {
      books.map((book) => (
        <Menu.Item
          key={book.id}
          draggable="true"
        >
          <p>
            {book.name}
            の読書進捗は「
            {book.state.name}
            」です
          </p>
          <Button onClick={() => backwardBookState(book.id)}>
            戻す
          </Button>
          <Button onClick={() => forwardBookState(book.id)}>
            進める
          </Button>
        </Menu.Item>
      ))
    }
  </Menu>
);

export default StateList;
