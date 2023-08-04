import React from 'react';
import { photo2, phone2 } from '../../images';
import "../../styles/ChatStyles.scss";
import { BsHandbag, BsPlus, } from 'react-icons/bs';
import '../../styles/ChatStyles.scss';
import { GrFormCheckmark } from 'react-icons/gr';
import { BiLaugh } from 'react-icons/bi';
import { FaLocationArrow } from 'react-icons/fa'


const Chat2 = () => {
    return (
        <div className='p-[1rem]'>
            <div className="flex flex-row">
                <div className="mr-[.6rem] w-[60px] h-[60px]">
                    <img src={photo2} alt="chat1" />
                </div>
                <div className="flex flex-row justify-between w-[100%]">
                    <div className="">
                        <h3 className='text-[16px] font-bold mb-[.4rem]'>Jane Doe</h3>
                        <div className="flex justify-between items-center">
                            <div className="relative ml-[1rem] mr-[.4rem]">
                                <span className='absolute top-[.5rem] left-[-.7rem] w-[.4rem] h-[.5rem] rounded-full bg-blue-600' />
                                <span className='text-[14px] text-gray-300'>Online</span>
                            </div>
                            <p className='text-[14px] text-gray-300'>12:55 am</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex items-center mb-[.4rem]">
                            <span className='text-[14px] mr-[1.5rem] py-[0.03rem] px-[.15rem] background rounded-lg]'>New Customer</span>
                            <span className='text-[14px] text-blue-600 tracking-normal'>View Profile</span>
                        </div>
                        <div className="flex items-center justify-end">
                            <span className='mr-[.3rem]'>< BsHandbag /></span>
                            <span className='text-[14px] text-gray-300 mr-[.3rem]'>0</span>
                            <span className='text-[14px] text-gray-300'>Orders</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='line' />

            <div className="">
                <span className='chat__date'>12 August 2022</span>

                <div className="flex flex-row mr-[1rem] w-[20rem] border-b-2 pb-2">
                    <img src={phone2} alt="phone1" className="mr-[1rem]" />
                    <div className="">
                        <h2 className="text-[14px] mb-[.5rem]">iPhone 13</h2>
                        <div className="flex flex-row justify-between items-center w-[15rem]">
                            <div>
                                <span className="font-bold text-[14px]">730,000.00</span>
                            </div>
                            <div className="flex items-center">
                                <h4 className="text-[12px] mr-1 text-blue-600">12</h4>
                                <span className="text-[12px] text-grey-300">In Stock</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="mt-[.5rem] ">
                <h3 className="text-[15px] py-[.7rem]  
                px-[.4rem] bg-[blue] w-[20rem] rounding text-white">Hello, I want to make enquiries about your Product</h3>
                <span className="text-[14px] mt-[3px]">12:55 am</span>
            </div>

            <div className="flex flex-row justify-end mt-[1.5rem] ">
                <div className="">
                    <h3 className="text-[15px] py-[1rem]  px-[rem] background rounding">Hello Janet, thank you for reaching out</h3>
                    <div className="flex justify-end items-center mt-2">
                        <span className="text-[14px] mt-[3px] mr-2">12:57 am</span>
                        <span className="w-[1.3rem] h-[1.3rem] round background"><GrFormCheckmark /></span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-end mt-[1.5rem] ">
                <div className="">
                    <h3 className="text-[15px] py-[1rem]  px-[1rem] background rounding ">What do you need to know?</h3>
                    <div className="flex justify-end items-center mt-2">
                        <span className="text-[14px] mt-[3px] mr-2">12:57 am</span>
                        <span className="w-[1.3rem] h-[1.3rem] round background"><GrFormCheckmark /></span>
                    </div>
                </div>
            </div>

            <span className='chat__date_2'>Today</span>


            <div className="mt-[1.5rem] ">
                <h3 className="text-[15px] py-[.7rem]  
                px-[.4rem] bg-[blue] w-[20rem] 
                rounding text-white">I want to know if the price is negotiable, i need about 2 Units</h3>
                <span className="text-[14px] mt-[3px]">12:58 am</span>
            </div>

            <div>
                <div className="w-[100%] border mt-[2rem] rounded-md py-[.7rem] px-[.6rem] flex flex-row items-center">
                    <span className="text-[1.5rem] mr-3 w-[2rem] h-[2rem] flex flex-row justify-center items-center rounded-md background"><BsPlus /></span>
                    < input type="text" id="message" name="message" placeholder="Your message" className="w-[100%] h-[100%] check" />
                    <div className="flex flex-row items-center">
                        <span className="text-[1.5rem] text-blue-600"><BiLaugh /></span>
                        <div className="">
                            <button type="submit" className="flex items-center ml-[1rem] py-[.3rem] px-[.7rem] background">
                                Send
                                <FaLocationArrow className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat2