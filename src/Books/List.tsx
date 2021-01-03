import React from 'react';
import BookItem from './BookItem';

const List: React.FC = () => {
  const bookList = [
    {
      id: 1,
      name: 'プロダクトマネジメント',
    },
    {
      id: 2,
      name: 'react入門',
    },
    {
      id: 3,
      name: '採用基準',
    },
  ];

  const items = bookList.map((book) => <BookItem name={book.name} key={book.id} />);

  return (
    <>
      {items}
    </>
  );
};

export default List;
