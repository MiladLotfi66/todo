import Link from 'next/link'
import { useRouter } from 'next/router'
import  { useState } from 'react'
import { signIn } from 'next-auth/react'


function SigninPage() {
    const router=useRouter();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    async function  signinHandler() {
        const res=await signIn("credentials",{email , password,redirect:false})
        if(!res.error)router.push("/");
    }
   
  return (
    
    <div className='signin-form'>
      <h3>login Form</h3>
      <input type='text' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type='password' placeholder='password'  value={password} onChange={e=>setPassword(e.target.value)}/>
    <button onClick={signinHandler}>login</button>
    <div>
        <p>Dont Have An Account? </p>
        <Link href='/signup'> Signup</Link>
    </div>
    </div>
    
  )
}

export default SigninPage
