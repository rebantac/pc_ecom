import React, { useState, useEffect } from 'react';
import { FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline, MdPermIdentity } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
//import { createUserWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../firebase';

export default function Register() {
  const { googleSignIn, user, emailSignUp } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleGooglesignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  })

  const handleEmailSignUp = async () => {
    try {
      await emailSignUp(email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-5 md:p-20 custom-img bg-gray-100">
      <div className="w-full md:w-2/3 max-w-4xl bg-white rounded-2xl shadow-2xl">
        <div className="md:flex">
          <div className="w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559964746-4ba3b376cd5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60")' }}>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl text-cyan-400 font-bold mb-2 text-center">Create Account</h2>
            <div className="border-t-2 border-cyan-400 w-16 mx-auto mb-4"></div>

            <div className='flex flex-col items-center'>
              <div className='w-full md:w-64 p-2 flex items-center mb-3'>
                <MdPermIdentity className='text-gray-400 m-2' />
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder='Full Name' className='bg-gray-100 outline-none text-sm flex-1 m-2' />
              </div>
              <div className='w-full md:w-64 p-2 flex items-center mb-3'>
                <FaRegEnvelope className='text-gray-400 m-2' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1 m-2' />
              </div>
              <div className='w-full md:w-64 p-2 flex items-center mb-3'>
                <MdLockOutline className='text-gray-400 m-2' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1 m-2' />
              </div>
              <div className='flex justify-centre w-full mb-5'>
                <label className='flex items-center text-xs'>
                  <input type="checkbox" name="remember" className='mr-1' />Agree to terms of use.
                </label>
              </div>
              <Link to="#" className="border-2 border-cyan-500 text-cyan-500 rounded-full px-4 md:px-8 py-2 inline-block font-semibold hover:bg-cyan-500 hover:text-white" onClick={handleEmailSignUp}>Sign Up</Link>
            </div>
            <p className='text-gray-400 my-3 flex justify-center'>Or use Google account to Login</p>
            <div className="flex justify-center my-4">
              <Link to="#" className='border-2 border-gray-200 mx-1 rounded-full p-3'>
                <FaGoogle className='text-sm' onClick={handleGooglesignIn} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
