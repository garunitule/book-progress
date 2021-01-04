import React from 'react';
import BookItem from './BookItem';

export type list = {
  id: number;
  name: string;
};

type Props = {
  itemList: list[];
};

const List: React.FC<Props> = ({ itemList }) => {
  const items = itemList.map((book) => <BookItem name={book.name} key={book.id} />);

  return (
    <>
      {items}
    </>
  );
};

export default List;
