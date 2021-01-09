import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { bookList } from './Types/BookList';

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
        >
          <p>
            {book.name}
          </p>
          <Button
            basic
            color="red"
            onClick={() => backwardBookState(book.id)}
          >
            戻す
          </Button>
          <Button
            basic
            color="blue"
            onClick={() => forwardBookState(book.id)}
          >
            進める
          </Button>
        </Menu.Item>
      ))
    }
  </Menu>
);

export default StateList;
