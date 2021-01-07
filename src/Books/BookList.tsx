import React from 'react';
import BookItem from './BookItem';

export type bookList = {
  id: number;
  name: string;
};

type Props = {
  itemList: bookList[];
};

const BookList: React.FC<Props> = ({ itemList }) => {
  const items = itemList.map((book) => <BookItem name={book.name} key={book.id} />);

  return (
    <>
      {items}
    </>
  );
};

export default BookList;
