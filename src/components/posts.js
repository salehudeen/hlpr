import React,{useEffect,useState} from 'react'
import {Nav} from './cards'
import {BottomNavEx} from './bottomNav'
import { Loading } from './loader'

const Post = () => {
    return (
        <div>
          
          <div className='post'> 
              <img className='postImage' src='https://source.unsplash.com/random' alt=''/>
              <p className='postComment'>Post info section </p>
          </div>



        </div>
    )
}



const Posts = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
      
      const loadData = async () => {
          
        // Wait for two second
        await new Promise((r) => setTimeout(r, 2000));
       
        // Toggle loading state
        setLoading((loading) === !loading);
        
      };
        
      loadData();
    }, [])

      
    if (loading) {
       return  <Loading/>
    }
      
    // If page is not in loading state, display page.
    else {


  return (
    <div>
      <Nav/>
      <div className='postCards'>
          
          <Post/>
          <Post/>
          <Post/>
          <Post/>
              
      </div>
       
      <BottomNavEx/>
    </div>
  )
    }
}

export default Posts