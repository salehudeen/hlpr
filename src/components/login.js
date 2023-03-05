import React, {useEffect,useState}from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { Loading } from './loader';

      
 



const Login = () => {

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

                    <header>Login</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"/>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Password" className="password"/>
                            <i className='bx bx-hide eye-icon'></i>
                        </div>

                        <div className="form-link">
                            <Link to='/forgotpass' className="forgot-pass">Forgot password?</Link>
                        </div>

                        <div className="field button-field">
                            <Link to='Cards'><button>Login</button></Link>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Don't have an account? 
                        <Link to= '/signup' className="link signup-link">SignUp</Link>
                        
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
  )
      }
    
}

export default Login;


