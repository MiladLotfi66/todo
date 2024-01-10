import Link from 'next/link'
import React from 'react'

function SignupPage() {
  return (
    
    <div className='signin-form'>
      <h3>Registeration Form</h3>
      <input type='text' placeholder='email'></input>
      <input type='password' placeholder='password'></input>
    <button>Register</button>
    <div>
        <p>Have An Account</p>
        <Link href='/signin'>Signin</Link>
    </div>
    </div>
    
  )
}

export default SignupPage
