import React from 'react';
import { Card } from 'semantic-ui-react';
import { bookList } from '../Books/BookList';

type Props = {
  books: bookList[];
};

const StateList: React.FC<Props> = ({ books }) => (
  <>
    {
      books.map((book) => (
        <Card key={book.id}>
          <Card.Content>
            <Card.Header>{book.name}</Card.Header>
            <Card.Description>
              {book.name}
              の読書進捗は「
              {book.state.name}
              」です
            </Card.Description>
          </Card.Content>
        </Card>
      ))
    }
  </>
);

export default StateList;
