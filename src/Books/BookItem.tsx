import React from 'react';

const BookItem: React.FC<{name: string}> = ({ name }) => (
  <p>{name}</p>
);

export default BookItem;
