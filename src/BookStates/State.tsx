import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { bookList } from './Types/BookList';
import { bookState } from './Types/BookState';

type Props = {
  books: bookList[];
  stateName: string;
  forwardBookState: (id: number) => void;
  backwardBookState: (id: number) => void;
  states: bookState[];
};

const StateList: React.FC<Props> = ({
  books,
  stateName,
  forwardBookState,
  backwardBookState,
  states,
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
          {
            states[0].id !== book.state.id
              ? (
                <Button
                  basic
                  color="red"
                  onClick={() => backwardBookState(book.id)}
                >
                  戻す
                </Button>
              )
              : ''
          }
          {
            states[states.length - 1].id !== book.state.id
              ? (
                <Button
                  basic
                  color="blue"
                  onClick={() => forwardBookState(book.id)}
                >
                  進める
                </Button>
              )
              : ''
          }
        </Menu.Item>
      ))
    }
  </Menu>
);

export default StateList;
