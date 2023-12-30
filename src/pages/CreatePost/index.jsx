import React from 'react';
import "./styles.css"
function CreatePost(){
    return <div classNmae="createPostPage" > 
    <div className='cpContainer'>
    <h1>Create A Post</h1>
    <div className='inputGp'>
        <label>Title:</label>
        <input placeholder='Title...'/>
    </div>
    <div className='inputGp'>
        <label>Post:</label>
        <textarea placeholder='Post...'/>
    </div>
    <button>Submit post</button>
    </div>
    
    </div>;
}

export default CreatePost;