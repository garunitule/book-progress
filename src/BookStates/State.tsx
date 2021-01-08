import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { bookList } from '../Books/BookList';

type Props = {
  books: bookList[];
};

const StateList: React.FC<Props> = ({ books }) => {
  const bookCards = books.map((book) => (
    <Card key={book.id}>
      <Card.Content>
        <Card.Header>{book.name}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          {book.name}
          is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        22 Friends
      </Card.Content>
    </Card>
  ));

  return (
    <>
      {bookCards}
    </>
  );
};

export default StateList;
