'use client'
import React from 'react'
import { ImAndroid } from "react-icons/im";
import Image from 'next/image';
import { IoArrowBackOutline } from "react-icons/io5";
import Link from 'next/link';
import paypal from '@/public/image/paypal.png'

export interface IApp {
    id: string,
    image: string,
    name: string,
    version: string,
    lastUpdate: string,
    size: string,
    link: string,
    type: string,
    description: string
}

function AppComponent() {

    const appsEx = [
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
    ]

    const appMobile = [
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        },
        {
            name: 'paypal',
            img: paypal
        }
    ]


    // const [apps, setApps] = useState<IApp[]>([])
    // const [mobileApps, setMobileApps] = useState<IApp[]>([])

    // useEffect(() => {
    //     const getFoodsData = async () => {
    //         const res = await fetch("http://localhost:3001/apps");
    //         const data = await res.json();
    //         const filtered = data.filter((item: IApp) => item.type === 'app')
    //         setApps(filtered)
    //         const cutted = filtered.slice(0, 6)
    //         setMobileApps(cutted)
    //     }
    //     getFoodsData();
    // }, [])



    return (
        <div className='px-5 mt-10'>
            <div>
                <span className='text-green-600 text-3xl font-bold'>
                    <ImAndroid className='inline ml-2' />
                    برنامه ها
                </span>
            </div>

            <div className='py-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2'>


                {/* {
                    apps.map((item, index) => {
                        return (
                            <Link href={`/apps/${item.id}`} key={index} className='hidden md:inline'>
                                <div>
                                    <div className='flex items-center justify-center mb-2'><Image src={item.image} alt='appIcon' width={30} height={30} className='rounded-2xl min-w-30 min-h-30 max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>{item.name}</h4></div>
                                </div>
                            </Link>
                        )
                    })
                }

                {
                    mobileApps.map((item, index) => {
                        return (
                            <Link href={`/apps/${item.id}`} key={index} className='inline md:hidden'>
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
                            <Link href={`/apps/1`} key={index} className='hidden md:inline'>
                                <div>
                                    <div className='flex items-center justify-center mb-2'><Image src={item.img} alt='appIcon' width={30} height={30} className='rounded-2xl min-w-30 min-h-30 max-w-30 max-h-30 active:scale-95 hover:scale-95 duration-300' /></div>
                                    <div className='flex items-center justify-center'><h4 className='text-white font-bold'>{item.name}</h4></div>
                                </div>
                            </Link>
                        )
                    })
                }
                {
                    appMobile.map((item, index) => {
                        return (
                            <Link href={`/apps/1`} key={index} className='inline md:hidden'>
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
                <Link href={'/apps'}>
                    <span className='text-green-500 active:text-green-600 select-none cursor-pointer py-3'>
                        مشاهده بیشتر
                        <IoArrowBackOutline className='inline mr-1' />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default AppComponent