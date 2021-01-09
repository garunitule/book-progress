import React from 'react';
import BookItem, { bookState } from './BookItem';

export type bookList = {
  id: number;
  name: string;
  state: bookState;
};

type Props = {
  itemList: bookList[];
};

const BookList: React.FC<Props> = ({ itemList }) => {
  const items = itemList.map(
    (book) => <BookItem name={book.name} key={book.id} state={book.state} />,
  );

  return (
    <>
      {items}
    </>
  );
};

export default BookList;
