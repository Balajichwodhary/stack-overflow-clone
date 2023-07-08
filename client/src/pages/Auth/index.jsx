import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { signup,login } from '../../actions/auth'
import './Auth.css'
import AboutAuth from './AboutAuth'
import logo from '../../assets/logo.png'

const Auth = () => {

    const [isSignUp,setSignup]= useState(false) 
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')



    const handleSwitch =()=>{
        setSignup(!isSignUp)

    }

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        
     e.preventDefault()
     if(!email && !password){
       alert('Enter email and Password')
     }
     if(isSignUp){
        if(!name){
            alert('Enter a name to Continue')
        }
        dispatch(signup({name,email,password},navigate))
     }
     else{
        dispatch(login({email,password},navigate))
     }
     
     console.log({name,password,email})
    }

  return (
    <section className='auth-section'>
        {isSignUp && <AboutAuth/>}
        <div className='auth-container-2'>
            {!isSignUp && <img src={logo} alt='stack overflow logo' className='auth-logo' width='150' />}

            <form onSubmit={handleSubmit}>
                {
                    isSignUp &&(
                        <label htmlFor="name">
                         <h4>Display Name</h4>
                         <input type='text' name='name' id='name' onChange={(e)=>{setName(e.target.value)}}/>
                        </label>
                    )
                }
                <label htmlFor="email">
                  <h4>Email</h4>
                  <input type='email' name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </label>
                <label htmlFor="password">
                 <div style={{display:"flex",justifyContent:"space-between"}}>
                   <h4>password</h4>
                   {!isSignUp&&<p style={{color:'#007ac6', fontSize:'13px'}} >forget password?</p>}
                 </div>
                 <input type='password' name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                 
                 {isSignUp && <p style={{color:'#666767',fontSize:"13px"}}>Password must contain at least eight characters, including at least 1 letter and 1 number</p>} 
                 </label>
                {
                    isSignUp && (<label htmlFor='check'> 
                                 <input type='checkbox' id='check'/>
                                 <p style={{fontSize:"13px" ,display:"block"}}>Opt-in to receive occasional product updates, user research invitations, company announcements,and digests.</p>
                    </label>)
                }
                 <button type='submit' className='auth-btn'>{!isSignUp? "Login" :"Sign Up"}</button>
                 {
                    isSignUp && (
                        <p style={{color:'#666767',fontSize:"13px"}}>
                             by clicking "Sign up", you agree to our 
                             <span style={{color:'#007ac6'}}>terms of service,</span>
                             <span style={{color:'#007ac6'}}>privacy policy </span>
                             and 
                             <span style={{color:'#007ac6'}}>cookie policy</span>
                        </p>
                    )
                 }
            </form>
              
                
            <p>
                {isSignUp?'Already have an account ?':"Don'have an account?"}
                <button type="button" className='handel-switch-btn' onClick={handleSwitch}>{isSignUp? "Login" : "Sign Up"}</button>
            </p>
        </div>

    </section>
  )
}

export default Auth