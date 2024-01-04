import React, { useEffect, useState } from 'react';
import { FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
//import { signInWithEmailAndPassword } from 'firebase/auth';
//mport { auth } from "../firebase";

function Login() {
    const { googleSignIn, user, emailSignIn } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    });

    const handleEmailSignIn = async () => {
        try {
            await emailSignIn(email, password);
            navigate("/");
          } catch (error) {
            alert(error.message);
            navigate("/Register");
          }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-2 custom-img">
            <div className="flex flex-col items-center justify-center w-full px-4 text-center">
                <div className='bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-2/3 max-w-4xl'>

                    {/* Sign In Section */}
                    <div className='md:flex'>
                        <div className='w-full md:w-3/5 p-5 text-black'>
                            <div className="text-left font-bold"><span className="text-green-500">Pooja</span>Computers</div>
                            <div className='py-10'>
                                <h2 className="text-3xl text-green-500 font-bold mb-2">Sign In to Account</h2>
                                <div className="border-2 w-10 border-green-500 inline-block mb-2 rounded-2xl"></div>
                                <div className="flex justify-center my-2">
                                    <Link to="#" className='border-2 border-gray-200 mx-1 rounded-full p-3'>
                                        <FaGoogle className='text-sm' onClick={handleGooglesignIn} />
                                    </Link>
                                </div>
                                <p className='text-gray-400 my-3 flex justify-center'>or use your email account</p>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3'>
                                        <FaRegEnvelope className='text-gray-400 m-2' />
                                        <input value={email} type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1 m-2' onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className='bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3'>
                                        <MdLockOutline className='text-gray-400 m-2' />
                                        <input value={password} type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1 m-2' onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className='flex justify-between w-full md:w-64 mb-5'>
                                        <label className='flex items-center text-xs'>
                                            <input type="checkbox" name="remember" className='mr-1' />Remember Me
                                        </label>
                                        <Link to="#" className='text-xs'>Forgot Password?</Link>
                                    </div>
                                    <Link to="#" className="border-2 border-green-500 text-green-500 rounded-full px-4 md:px-12 py-2 inline-block font-semibold hover:bg-green-500 
                    hover:text-white" onClick={handleEmailSignIn}>Sign In</Link>
                                </div>
                            </div>
                        </div>

                        {/* Sign Up Section */}
                        <div className='w-full md:w-2/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-8 md:py-36 px-4 md:px-12'>
                            <h2 className="text-3xl font-bold text-white mb-2">Hello Mate!</h2>
                            <div className="border-2 w-10 border-white inline-block mb-2"></div>
                            <p className="mb-5 md:mb-10">Fill up your details quickly to order soon!</p>
                            <Link to="/Register" className="border-2 border-white rounded-full px-4 md:px-12 py-2 inline-block font-semibold hover:bg-white 
                    hover:text-green-500">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
