import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
      <h1 className="text-center my-7 font-semibold text-2xl ">Sign Up</h1>
      <form className='w-3/4 sm:w-1/2  md:w-1/3 mt-8 mb-3 mx-auto'>

          <input className='block w-full p-2 my-3 rounded-lg focus:outline-none' 
          type="text" name="username" id="username" placeholder='username'/>

          <input className='block w-full p-2 my-3 rounded-lg focus:outline-none' 
          type="text" name="email" id="email" placeholder='Email'/>

          <input className='block w-full p-2 my-3 rounded-lg focus:outline-none' 
          type="password" name="password" id="password" placeholder='password'/>

          <button className='block w-full p-2 my-3 hover:opacity-70 disabled:opacity-70 
          rounded-lg bg-indigo-950 text-white'>SIGN UP</button>
      </form>

      <p className='w-3/4 sm:w-1/2  md:w-1/3 mt-3 mx-auto' >Have an account?
        <Link to="/sign-in">
          <span className="text-blue-700"> Sign in</span> 
        </Link>
        </p>
        
    </div>
  )
}
