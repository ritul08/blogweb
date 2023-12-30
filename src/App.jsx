import React from 'react';
import { Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
const App = () => {
  return (
    <div className='container'>
      <nav>
<Link to="/create">CreatePost</Link>

      </nav>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/' element ={<CreatePost/>} />
      </Routes>
     
    </div>
  );
};

export default App;