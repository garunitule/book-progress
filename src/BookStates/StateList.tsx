import React from 'react';
import { Grid } from 'semantic-ui-react';
import State from './State';
import { bookList } from './Types/BookList';
import { bookState } from './Types/BookState';

type Props = {
  books: bookList[];
  states: bookState[];
  forwardBookState: (id: number) => void;
  backwardBookState: (id: number) => void;
};

const StateList: React.FC<Props> = ({
  books,
  states,
  forwardBookState,
  backwardBookState,
}) => {
  const bookStates = states.map((state) => (
    <Grid.Column key={state.id}>
      <State
        books={books.filter((book) => book.state.name === state.name)}
        stateName={state.name}
        forwardBookState={forwardBookState}
        backwardBookState={backwardBookState}
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
