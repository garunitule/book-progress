import React from 'react';
import { Grid } from 'semantic-ui-react';
import State from './State';
import { bookList } from '../Books/BookList';
import { bookState } from '../Books/BookItem';

type Props = {
  books: bookList[];
  states: bookState[];
};

const StateList: React.FC<Props> = ({ books, states }) => {
  const bookStates = states.map((state) => (
    <Grid.Column key={state.id}>
      <State
        books={books.filter((book) => book.state.name === state.name)}
        stateName={state.name}
      />
    </Grid.Column>
  ));

  return (
    <Grid columns={5}>
      <Grid.Row>
        {bookStates}
      </Grid.Row>
    </Grid>
  );
};

export default StateList;
