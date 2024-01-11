import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function SignupPage() {
    const router=useRouter();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signupHandler =async ()=>{
        const res=await fetch('/api/auth/signup',{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{"Content-Type":"application/json"}
        })
        const data=await res.json();
        console.log(data);
        if(data.status==="success")router.push("/signin");
    }
  return (
    
    <div className='signin-form'>
      <h3>Registeration Form</h3>
      <input type='text' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type='password' placeholder='password'  value={password} onChange={e=>setPassword(e.target.value)}/>
    <button onClick={signupHandler}>Register</button>
    <div>
        <p>Have An Account? </p>
        <Link href='/signin'> Signin</Link>
    </div>
    </div>
    
  )
}

export default SignupPage
