import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import shark_logo from "../../assets/shark_logo.png"
import { login, signup } from '../../firebase'
import blue_load from '../../assets/blue-load.gif'


const Login = () => {

  const [signState, setSignState] = useState("Sign In"); /*create a sign state variable that allows you to switch from sign up to sign in*/ 

  //create a state variable that allows us to save the forms data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); //initiate loading screen

  //create function for user authenication
  const userAuth = async (event)=>{
    event.preventDefault(); //dont reload when we submit

    setLoading(true);

    if(signState==="Sign In"){
      await login(email, password);
    }else{
      await signup(name, email, password);
    }

    setLoading(false);

  }

  return (

    loading? <div className="login-spinner">   
      <img src={blue_load} alt="" />
    </div>:

    <div className='login'>
            <img src={shark_logo} className='login-logo' alt="" />

      <div className="login-form">
      {/*<img src={shark_logo} className='login-logo' alt="" />*/}

        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"? <input
           value={name} onChange={(e)=>{setName(e.target.value)}} 
           
           type="text" placeholder="Your Name"/>: <></>}           {/*create a terinary so that only signup asks for name */}

          <input 
          value={email} onChange={(e)=>{setEmail(e.target.value)}} 
          type="text" placeholder="Email" />

          <input 
          value={password} onChange={(e)=>{setPassword(e.target.value)}} 
          type="password" placeholder="Password" />

          <button onClick={userAuth} type='submit'>{signState}</button> {/*connect with auth function */}


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
