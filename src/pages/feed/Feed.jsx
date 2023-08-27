import React ,{useState,useEffect}from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import axios from 'axios'
import Post from './post/Post'
const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch('https://backend-guft.onrender.com/post')
          .then(res => res.json())
          .then(data => {
              setPosts(data);
          })
  }, [posts])

    
  return (
    <div className='feed'>
      <div className='feed_header'>
        <h2>Home</h2>
      </div>
      <TweetBox/>
      {
                posts.map(p => <Post key={p._id} p={p} />)
            }
   
            </div>
  );
};

export default Feed
