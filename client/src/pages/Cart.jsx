import React from 'react'
import logo from '../assets/logo.png'
import Counter from '../components/Counter'

function Cart() {
    return (
        <div className='p-5'>
            <div className="flex justify-center text-5xl">Cart</div>
            <div className='flex items-center justify-between mt-4'>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded shadow m-1'>Continue Shopping</button>
                <div className='flex underline text-lg hover:cursor-pointer'>
                    <p>Items in your Card: 3</p>
                    <p className='ml-5'>Wishlist Items: 0</p>
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded shadow m-1'>Checkout</button>
            </div>

            {/**Central div */}
            <div className='flex mt-7'>
                <div className='flex flex-col flex-1 '>
                    {/* list of products */}
                    <div className='flex w-[100%] h-auto items-center '>
                        <div className='product flex self-start pl-5'>
                            <img className='w-[7.5rem] h-[80%] rounded-lg hover:scale-[1.1] ease-in duratoin-300 my-2' src={logo} alt="..." />
                            <div className='description flex flex-col ml-5 h-auto justify-between'>
                                <p>
                                    <b className='mr-3'>ID:</b>123456
                                </p>
                                <p>
                                    <b className='mr-3'>Product:</b>xyz
                                </p>
                                <p className='flex item-center justify-start'>
                                    <b className='mr-3'>Color</b>:
                                    <div className='rounded-full bg-blue-600 border-2 p-[10px] cursor-pointer  ml-1 w-[20px] h-[20px]'></div>
                                </p>
                                <p>
                                    <b className='mr-3'>Price:</b>999
                                </p>
                            </div>
                        </div>
                        <div className=' flex flex-col justify-center items-center m-2 flex-auto'>
                            <Counter/>
                            <p className='flex items-center justify-center text-2xl'>
                                <b>Rs70</b>
                            </p>
                        </div>
                    </div>
                    <hr className='mt-7 mb-7'/>
                    <div className='flex w-[100%] h-auto items-center '>
                        <div className='product flex self-start pl-5'>
                            <img className='w-[7.5rem] h-[80%] rounded-lg hover:scale-[1.1] ease-in duratoin-300 my-2' src={logo} alt="..." />
                            <div className='description flex flex-col ml-5 h-auto justify-between'>
                                <p>
                                    <b className='mr-3'>ID:</b>123456
                                </p>
                                <p>
                                    <b className='mr-3'>Product:</b>xyz
                                </p>
                                <p className='flex item-center justify-start'>
                                    <b className='mr-3'>Color</b>:
                                    <div className='rounded-full border-2 p-[10px] cursor-pointer  ml-1 w-[20px] h-[20px]'></div>
                                </p>
                                <p>
                                    <b className='mr-3'>Price:</b>999
                                </p>
                            </div>
                        </div>
                        <div className=' flex flex-col justify-center items-center m-2 flex-auto'>
                            <Counter/>
                            <p className='flex items-center justify-center text-2xl'>
                                <b>Rs70</b>
                            </p>
                        </div>
                    </div>
                    <hr className='mt-7 mb-7'/>
                </div>
                <div className=' flex-[0.4] w-auto h-auto border-2 border-black rounded-md shadow-lg flex flex-col items-center p-3'>
                    <h1>Summary</h1>
                    <div className="flex justify-between mt-3 w-[100%]">
                        <p>Subtotal:</p>
                        <p>Rs.140</p>
                    </div>
                    <div className="flex justify-between mt-3 w-[100%]">
                        <p>Shipping:</p>
                        <p>Rs.40</p>
                    </div>
                    <div className="flex justify-between mt-3 w-[100%]">
                        <p>Shipping Discount:</p>
                        <p>-Rs.40</p>
                    </div>
                    <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold">
                        <p>Total: </p>
                        <p>Rs.140</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
