import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import shark_logo from "../../assets/shark_logo.png"


const Login = () => {

  const [signState, setSignState] = useState("Sign In") /*create a sign state variable that allows you to switch from sign up to sign in*/ 


  return (
    <div className='login'>
            <img src={shark_logo} className='login-logo' alt="" />

      <div className="login-form">
      {/*<img src={shark_logo} className='login-logo' alt="" />*/}

        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"? <input type="text" placeholder="Your Name"/>: <></>}           {/*create a terinary so that only signup asks for name */}

          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>

        </form>
        <div className="form-switch">
          {signState==="Sign In"? 
          <p>New to BabyShark? <span onClick={()=> {setSignState("Sign Up")}}>Sign Up Now</span></p> :
          <p>Aready have account? <span onClick={()=> {setSignState("Sign In")}}>Sign In Now</span></p>
          } {/*onclick event allows for dynamic transitions between pages */}

        </div>

      </div>
      
    </div>
  )
}

export default Login
