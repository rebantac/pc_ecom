
import React from 'react'
import { FaFacebook, FaLinkedin, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline, MdPermIdentity } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

export default function Register() {

    const { googleSignIn } = UserAuth();

    const handleGooglesignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-20 custom-img">
            <div className=" flex flex-col items-center justify-center w-full px-20 text-center">
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                    <div className='w-3/5  text-black'>
                        <img className='object-fill rounded-tl-2xl rounded-bl-2xl' src="https://images.unsplash.com/photo-1559964746-4ba3b376cd5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="pancakes" />
                    </div>

                    <div className='w-2/5 bg-white rounded-tr-2xl rounded-br-2xl'>
                        <div className='py-10'>
                            <h2 className="text-3xl text-cyan-400 font-bold mb-2">Create Account</h2>
                            <div className="border-2 w-10 border-cyan-400 inline-block mb-2 rounded-2xl"></div>
                            <div className="flex justify-center my-2">
                                <Link to="#" className='border-2 border-gray-200 mx-1 rounded-full p-3'>
                                    <FaFacebook className='text-sm' />
                                </Link>
                                <Link to="#" className='border-2 border-gray-200 mx-1 rounded-full p-3'>
                                    <FaLinkedin className='text-sm' />
                                </Link>
                                <Link to="#" className='border-2 border-gray-200 mx-1 rounded-full p-3'>
                                    <FaGoogle className='text-sm' onClick={handleGooglesignIn} />
                                </Link>
                            </div>
                            <p className='text-gray-400 my-3 flex justify-center'>or use your email account</p>
                            <div className='flex flex-col items-center'>
                                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                    <MdPermIdentity className='text-gray-400 m-2' />
                                    <input type="text" name='name' placeholder='Full Name' className='bg-gray-100 outline-none text-sm flex-1 m-2' />
                                </div>
                                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                    <FaRegEnvelope className='text-gray-400 m-2' />
                                    <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1 m-2' />
                                </div>
                                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                    <MdLockOutline className='text-gray-400 m-2' />
                                    <input type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1 m-2' />
                                </div>
                                <div className='flex justify-between w-64 mb-5'>
                                    <label className='flex items-center text-xs'>
                                        <input type="checkbox" name="remember" className='mr-1' />Agree to terms of user.
                                    </label>
                                </div>
                                <Link to="#" className="border-2 border-cyan-500 text-cyan-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-cyan-500 
                    hover:text-white">Sign Up</Link>
                            </div>
                        </div>
                    </div> {/* Sign Up */}
                </div>
            </div>
        </div>
    )
}
