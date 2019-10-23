import React from 'react';
import './App.css';
import Carousel from './Containers/Carousel';
import { slides } from '../src/Data/data'

function App() {
  return (
    <Carousel slides={slides}/>
  );
}

export default App;
