import React from 'react';

export type bookState = {
  id: number;
  name: string;
};

const BookItem: React.FC<{name: string, state: bookState}> = ({ name, state }) => (
  <>
    <p>{name}</p>
    <p>{state}</p>
  </>
);

export default BookItem;
