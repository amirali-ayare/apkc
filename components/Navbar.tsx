'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/image/apkclub_logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)

    const path = usePathname();
    const links = [
        {
            txt: 'صفحه اصلی',
            link: '/'
        },
        {
            txt: 'درباره ما',
            link: '/aboutus'
        },
        {
            txt: 'برنامه ها',
            link: '/apps'
        },
        {
            txt: 'بازی ها',
            link: '/game'
        }
    ]

    return (
        <div className='w-full p-5 bg-zinc-900 text-green-600 flex items-center justify-between border-b-1 border-zinc-700'>
            <div className='inline md:hidden'>
                <button onClick={() => setOpenMenu(true)} className='text-green-600 p-2 text-2xl'><FiMenu /></button>
            </div>

            <div className={openMenu ? 'block absolute bg-zinc-900 top-0 left-0 p-10 w-full h-full' : 'hidden'} style={{zIndex:'99'}}>
                <div className='flex w-full items-center justify-between'>
                    <div><Link href={'/'}><Image src={logo} alt='logo' className='w-15' /></Link></div>
                    <div><button onClick={() => setOpenMenu(false)} className='p-2 text-2xl bg-[#43a04830] duration-300 rounded-md hover:bg-[#43a04850] active:bg-[#43a04850] text-green-600'><IoClose /></button></div>
                </div>

                <div className='mt-10'>
                    {
                        links.map((item, index) => {
                            return (
                                <Link key={index} href={item.link}><div className={item.link === path ? 'font-bold text-green-600 text-lg mb-3' : 'mb-3 text-lg text-zinc-400 font-light line-anim'}>{item.txt}</div></Link>
                            )
                        })
                    }
                </div>
            </div>

            <div>
                <Link href={'/'}><Image src={logo} alt='logo' className='w-15' /></Link>
            </div>
            <div className='hidden md:inline'>
                <ul className='flex gap-10'>
                    {
                        links.map((item, index) => {
                            return (
                                <Link key={index} href={item.link}><li className={item.link === path ? 'font-bold text-green-600 text-sm md:text-base' : 'text-sm md:text-base text-zinc-400 font-light line-anim'}>{item.txt}</li></Link>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar