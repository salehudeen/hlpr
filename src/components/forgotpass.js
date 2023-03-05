import React from 'react'
import { Link } from 'react-router-dom'
const Forgotpass = () => {
  return (
    <div>
      <div className='container'>
       <div className="form login">
                <div className="form-content">

                    <header>Forgot Password</header>
                    <form action="#">
                       <p>Enter the email your account is associated with below </p>
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"/>
                        </div>

                        

                        <div className="field button-field">
                            <Link to='/'><button>send</button></Link>
                        </div>
                    </form>

                   
                </div>

               
            </div>
         </div>
    </div>
  )
}

export default Forgotpass