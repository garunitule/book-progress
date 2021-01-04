import React from 'react';
import './App.css';
import List, { list } from './Books/List';
import InputText from './Components/InputText';

const bookList: list[] = [
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

const App: React.FC = () => (
  <div className="App">
    <InputText />
    <List itemList={bookList} />
  </div>
);

export default App;
