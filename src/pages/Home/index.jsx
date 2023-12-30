import React, { useState } from 'react';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import BlogList from '../../components/Home/BlogList';
import { blogList } from '../../config/Data';
import EmptyList from '../../components/Common/EmptyList';
const Home = () => {
  const [blogs,setBlogs]=useState(blogList);
  const [searchKey,setSearchKey]=useState('');

  //search submit
  const handleSearchSubmit=event=>{
    event.preventDefault();
    handleSearchResults()
  }


//search  for blogs by category
  const handleSearchResults=()=>{
    const allBlogs=blogList;
    const filteredBlogs=allBlogs.filter(blog=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));



    setBlogs(filteredBlogs);
  }


  const handleClearSearch=()=>{
    setBlogs(blogList);
    setSearchKey('');
  }
  return (
    <div>
      {/*Page Header*/}
      <Header/>
      {/*Search Bar*/} 
      <SearchBar value={searchKey} clearSearch={handleClearSearch} formSubmit={handleSearchSubmit}  handleSearchKey={e=>setSearchKey(e.target.value)}/> 
      {/*Blog list and empty list*/}
      {!blogs.length ?<EmptyList/> :<BlogList blogs={blogs}/>}



    </div>
  )
}

export default Home;