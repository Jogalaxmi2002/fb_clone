import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
       <StoryReel/> 
       <MessageSender />

       <Post
       profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnf49tKsTe77jNXAYoRdxDW2j7JqpXv02B8G-tZh4s&s"
       message="Just_being_myself"
       timestamp=" this is a timestamp"
       username="Jogalaxmi_rath"
       image="https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
       
       
       
       />
       <Post
       profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnf49tKsTe77jNXAYoRdxDW2j7JqpXv02B8G-tZh4s&s"
       message="Just_being_myself"
       timestamp=" this is a timestamp"
       username="Jogalaxmi_rath"
       image="https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
       
       
       />
       <Post

profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnf49tKsTe77jNXAYoRdxDW2j7JqpXv02B8G-tZh4s&s"
message="Just_being_myself"
timestamp=" this is a timestamp"
username="Jogalaxmi_rath"
image="https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"


       
       />

    </div>
  );
}

export default Feed;