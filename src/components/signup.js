import React,{useEffect,useState} from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { Loading } from './loader';

const Signup = () => {
   
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
            <div className='container'>
              <div className="form login">
              <div className="form-content">
                    <header>Signup</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"/>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Create password" className="password"/>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Confirm password" className="password"/>
                            <i className='bx bx-hide eye-icon'></i>
                        </div>

                        <div className="field button-field">
                            <button>Signup</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Already have an account? 
                         
                        <Link to= '/' className="link login-link">Login</Link>
                        
                        </span>
                    </div>
                </div>

                <div className="line"></div>

                

                <div className="media-options">
                    <button className="field google">
                        <FcGoogle className="google-img"/>
                        <span>Login with Google</span>
                    </button>
                </div>
                </div>
         </div>
    </div>

      
  )}
}

export default Signup;


