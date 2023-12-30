import React from 'react'
import './styles.css'
import Chip from '../../../Common/Chip';
import { Link } from 'react-router-dom';
const BlogItem = ({blog:{id,description,title,createdAt,authorName,authorAvatar,category,cover},}) => {
  return (
    <div className='blogItem-wrap'>
        <img src={cover} alt="cover" />
        <Chip label={category}/>
        <h3>{title}</h3>
        <p className='blogItem-desc'>{description}</p>

        <footer>
            <div className="blogItem-author">
                <img src={authorAvatar} alt="avatar" />
                <div>
                    <h6>{authorName}</h6>
                    <p>{createdAt}</p>
                </div>
            </div>
            <Link to={`/blog/${id}`}>➝</Link>
        </footer>
    </div>
  )
}

export default BlogItem
