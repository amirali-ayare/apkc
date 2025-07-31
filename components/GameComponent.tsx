'use client'
import Image from 'next/image'
import React from 'react'
import { IoGameController } from "react-icons/io5";
import { IoArrowBackOutline } from 'react-icons/io5'
import Link from 'next/link';
// import { IApp } from './AppComponent';
import inshot from '@/public/image/inshot-logo.png'

function GameComponent() {

    const appsEx = [
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
    ]

    const mobileApp = [
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        },
        {
            name: 'inshot',
            img: inshot
        }
    ]

    // const [games, setGames] = useState<IApp[]>([])
    // const [mobileGames, setMobileGames] = useState<IApp[]>([])

    // useEffect(() => {
    //     const getFoodsData = async () => {
    //         const res = await fetch("http://localhost:3001/apps");
    //         const data = await res.json();
    //         const filtered = data.filter((item: IApp) => item.type === 'game')
    //         setGames(filtered)
    //         const cutted = filtered.slice(0, 6)
    //         setMobileGames(cutted)
    //     }
    //     getFoodsData();
    // }, [])

    return (
        <div className='px-5 pt-10 pb-12'>
            <div>
                <span className='text-green-600 text-3xl font-bold'>
                    <IoGameController className='inline ml-2' />
                    بازی ها
                </span>
            </div>

            <div className='p-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2'>



                {/* {
                    games.map((item, index) => {
                        return (
                            <Link href={`/game/${item.id}`} key={index} className='hidden md:inline'>
                                <div>
                                    <div className='flex items-center justify-center mb-2'><Image src={item.image} alt='appIcon' width={30} height={30} className='rounded-2xl min-w-30 min-h-30 max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>{item.name}</h4></div>
                                </div>
                            </Link>
                        )
                    })
                }

                {
                    mobileGames.map((item, index) => {
                        return (
                            <Link href={`/game/${item.id}`} key={index} className='inline md:hidden'>
                                <div>
                                    <div className='flex items-center justify-center mb-2'><Image src={item.image} alt='appIcon' width={30} height={30} className='rounded-2xl min-w-30 min-h-30 max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>{item.name}</h4></div>
                                </div>
                            </Link>
                        )
                    })
                } */}

                {
                    appsEx.map((item, index) => {
                        return (
                            <Link href={`/game/1`} key={index} className='hidden md:inline'>
                                <div>
                                    <div className='flex items-center justify-center mb-2'><Image src={item.img} alt='appIcon' width={30} height={30} className='rounded-2xl min-w-30 min-h-30 max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>{item.name}</h4></div>
                                </div>
                            </Link>
                        )
                    })
                }
                {
                    mobileApp.map((item, index) => {
                        return (
                            <Link href={`/game/1`} key={index} className='inline md:hidden'>
                                <div>
                                    <div className='flex items-center justify-center mb-2'><Image src={item.img} alt='appIcon' width={30} height={30} className='rounded-2xl min-w-30 min-h-30 max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>{item.name}</h4></div>
                                </div>
                            </Link>
                        )
                    })
                }


            </div>

            <div>
                <Link href={'/game'}>
                    <span className='text-green-500 active:text-green-600 select-none cursor-pointer py-3'>
                        مشاهده بیشتر
                        <IoArrowBackOutline className='inline mr-1' />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default GameComponent