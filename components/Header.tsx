"use client"
import Image from 'next/image';
import React from 'react'
import { TbArrowBigDownLines } from "react-icons/tb";
import img from '@/public/image/header2.png'

function Header() {

    const handleScroll = () => {
        window.scrollBy({
            top: 600,
            behavior: "smooth"
        })
    }

    return (
        <div className='w-full p-5 pt-10 bg-zinc-900 grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
            <div>
                <h1 className='text-2xl text-center md:text-right leading-10 md:leading-15 md:text-4xl text-white font-bold mb-5'>
                    جدیدترین و بروز ترین برنامه های مود شده، ترفندها و آموزش ها در <span className='text-green-600 text-3xl md:text-4xl font-black'>ApkClub</span>
                </h1>
                <div className='flex justify-center md:justify-start'>
                    <button onClick={handleScroll} className='border-2 select-none ml-3 text-xs md:text-base rounded-3xl border-green-600 text-green-500 cursor-pointer hover:text-white bg-transparent duration-300 hover:bg-green-600 px-5 py-2 active:text-white active:bg-green-600'>
                        بزن بریم
                        <TbArrowBigDownLines className='inline mr-2 text-xl relative flash' />
                    </button>
                </div>
            </div>

            <div className='flex justify-center'>
                <Image src={img} alt='image' className='w-120' />
            </div>
        </div>
    )
}

export default Header