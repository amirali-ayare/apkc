import Image from 'next/image'
import React from 'react'
import inshot from "@/public/image/inshot-logo.png"
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'

function page() {



    return (
        <div className='bg-zinc-900 p-5'>
            <div className='flex justify-center items-center mb-5'>
                <Link href={'/'}>
                    <span className='text-zinc-500 text-lg font-light'>خانه</span>
                </Link>
                <IoIosArrowBack className='inline mr-2 text-zinc-500' />
                <span className='text-3xl mr-2 text-green-600 font-black'>برنامه ها</span>
            </div>

            <div className='py-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2'>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl min-w-30 min-h-30 max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
                <div>
                    <div className='flex items-center justify-center mb-2'><Image src={inshot} alt='appIcon' className='rounded-2xl max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>Inshot pro</h4></div>
                </div>
            </div>
        </div>
    )
}

export default page