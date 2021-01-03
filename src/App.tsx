import React from 'react';
import './App.css';
import List from './Books/List';
import InputText from './Components/InputText';

const App: React.FC = () => (
  <div className="App">
    <InputText />
    <List />
  </div>
);

export default App;
