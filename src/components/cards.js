import React,{useState,useEffect} from 'react'

import { Link } from 'react-router-dom';
import { Loading } from './loader';
import {BottomNavEx} from './bottomNav'

const Card = () => {
  return(
    <div>
      
              <div className='card'>
                <img className='cardImage' src = {require('../assets/Orimg.jpg')}  alt='organisation'/>
                <div className='cardInfo'>
                <p>Name</p>
                <p>Location</p>
                <p>Donations Recieved</p>
                <Link to='/carddetails'><button className='cardButton'> Donate</button></Link>
                </div>
              </div>
          
    </div>
  )
}


export const Nav = () => {
  return (
   
    <div>
      <div className='navbar'>
           <div >
             <img className='navlogo'  src={require('../assets/logo1.png')} alt='hlpr'/>
           </div>
           {/* right side of nav */}
           <div className='navRight'>
           <div className='navIcons'>
           <p>Welcome back Deen</p>
           </div>
           <div>
            <img className='navProfile'  src={require('../assets/Orimg.jpg')} alt='profile' />
           </div>
           </div>
      </div>
    </div>
     

  )
}


const Cards = () => {
 

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
{/* card display section */}
      <main>
          <input className='searchInput' type='text' placeholder='search' />

          <div className='cards'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>


      </main>

      <BottomNavEx/>
    </div>
  )}
}

export default Cards