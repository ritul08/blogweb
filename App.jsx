import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' exact component={<Home/>} />
        <Route path='/blog/:id' component={<Blog/>} />
      </Routes>
    </div>
  );
};

export default App;
