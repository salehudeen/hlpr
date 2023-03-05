import React from 'react'
import { Link } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {BiHomeAlt} from 'react-icons/bi'
import {BiStats} from 'react-icons/bi'
import {AiOutlineHistory} from 'react-icons/ai'
import {BsImageFill} from 'react-icons/bs'

export const  BottomNavEx = () => {
    return <BottomNav/>
}



const Navs = (props) => {
    return(
        <div>
           
                <Link to={props.link}>
                    <span className='icon'>{props.icon}</span>
                    <span className='text'>{props.text}</span>
                </Link>
           
            
       
        </div>
    )
}



const BottomNav = () => {
  return (
    <div>
      <div className='bottomnavConainer'>
        

      <div className='bottomNavigation'>
       <div className='bottomNavbody'>
            <ul>
            <li className='list '>
            <Navs text={'Home'} link={'/cards'}  icon ={<BiHomeAlt/>} />
            </li>
            
            <li className='list'>
           <Navs text={'Posts'} link={'/posts'} icon={<BsImageFill/>}/>
            </li>

            <li className='list'>
            <Navs text={'History'} link={'/history'} icon={<AiOutlineHistory/>}/>
            </li>

            <li className='list'>
            <Navs text={'Stats'} icon={<BiStats/>}/>
            </li>

            <li className='list'>
            <Navs text={'Settings'} icon={<FiSettings/>}/>
            </li>
           
            </ul>
       </div>
      </div>




      </div>
      




    </div>
    
    
  )
  
}







export default BottomNav