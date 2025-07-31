"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import pa from '@/public/image/paypal.png'
import defaultImage from '@/public/image/default-image.jpg'
import { TbFileUpload } from "react-icons/tb";
import { BiPencil, BiTrashAlt } from 'react-icons/bi';


function AdminPanel() {

    const [image, setImage] = useState<any>(defaultImage)

    const [appData, setAppData] = useState({
        image: image,
        name: '',
        version: '',
        lastUpdate: '',
        size: '',
        link: '',
        type: 'app',
        description: ''
    })

    const type = [
        {
            text: 'برنامه',
            value: 'app'
        },
        {
            text: 'بازی',
            value: 'game'
        }
    ]

    const [status, setStatus] = useState('none')
    const statusTypes = [
        {
            title: 'درحال ارسال ...',
            status: 'loading'
        },
        {
            title: 'خطا در ارسال',
            status: 'error'
        },
        {
            title: 'ارسال شد!',
            status: 'success'
        },
        {
            title: 'ثبت',
            status: 'none'
        },
    ]

    const sendData = async () => {
        setStatus('loading')
        try {
            await fetch("http://localhost:3010/apps", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(appData)
            })
            setStatus('success')
        } catch (err) {
            setStatus('error')
        }
        console.log('submited');
    }



    const onChangeImage = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            // setImage(URL.createObjectURL(event.target.files[0]));
            const imageURL = URL.createObjectURL(event.target.files[0])
            setAppData(prev => ({ ...prev, image: imageURL }))
        }
    }

    console.log(appData);


    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col gap-4'>
                <div><h4 className='text-3xl text-green-600 font-bold'>اضافه کردن برنامه</h4></div>
                <div>
                    <div className='border-3 border-dashed border-green-600 rounded-xl w-full md:w-60 p-3'>
                        <Image src={appData.image} alt='' className='' width={500} height={500} />
                    </div>
                </div>
                <div>
                    <button className='p-2 w-full duration-100 bg-zinc-800 text-zinc-100 rounded'>
                        انتخاب عکس
                        <TbFileUpload className='inline mr-1' />
                    </button>
                    <input accept='image/*' onChange={onChangeImage} type="file" name="" id="" className='w-full bg-red-500 p-2 opacity-0 relative -top-10' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <h5 className='text-zinc-100 mb-1 mx-2'>نام برنامه</h5>
                        <input type="text"
                            onChange={(e) => setAppData(prev => ({ ...prev, name: e.target.value }))}
                            className='p-2 w-full rounded-xl border-2 border-zinc-700' placeholder='Picsart'
                        />
                    </div>
                    <div>
                        <h5 className='text-zinc-100 mb-1 mx-2'>نسخه برنامه</h5>
                        <input type="text"
                            onChange={(e) => setAppData(prev => ({ ...prev, version: e.target.value }))}
                            className='p-2 w-full rounded-xl border-2 border-zinc-700' placeholder='18.2.4'
                        />
                    </div>
                    <div>
                        <h5 className='text-zinc-100 mb-1 mx-2'>آخرین آپدیت</h5>
                        <input type="text"
                            onChange={(e) => setAppData(prev => ({ ...prev, lastUpdate: e.target.value }))}
                            className='p-2 w-full rounded-xl border-2 border-zinc-700' placeholder='8 تیر'
                        />
                    </div>
                    <div>
                        <h5 className='text-zinc-100 mb-1 mx-2'>حجم</h5>
                        <input type="text"
                            onChange={(e) => setAppData(prev => ({ ...prev, size: e.target.value }))}
                            className='p-2 w-full rounded-xl border-2 border-zinc-700' placeholder='59 مگابایت'
                        />
                    </div>
                    <div>
                        <h5 className='text-zinc-100 mb-1 mx-2'>لینک دانلود</h5>
                        <input type="text"
                            onChange={(e) => setAppData(prev => ({ ...prev, link: e.target.value }))}
                            className='p-2 w-full rounded-xl border-2 border-zinc-700' placeholder='http...'
                        />
                    </div>

                    <div>
                        <h5 className='text-zinc-100 mb-1 mx-2'>توضیحات برنامه</h5>
                        <textarea className='p-2 w-full rounded-xl border-2 border-zinc-700' onChange={(e) => setAppData(prev => ({ ...prev, description: e.target.value }))} placeholder='توضیحات...'></textarea>
                    </div>

                    <div>
                        <h5 className='text-zinc-100 mb-1 mx-2'>نوع</h5>
                        {
                            type.map((item) => {
                                return (
                                    <button key={item.value}
                                        className={appData.type == item.value ? 'bg-green-600 cursor-pointer text-white px-4 py-2 rounded-md duration-300' : 'duration-300 text-white px-4 py-2 cursor-pointer'}
                                        onClick={() => setAppData(prev => ({ ...prev, type: item.value }))}
                                    >{item.text}</button>
                                )
                            })
                        }
                    </div>

                    <div className='flex items-center'>
                        <button onClick={sendData} className='bg-green-600 p-3 rounded-lg cursor-pointer hover:bg-green-800 active:bg-green-800 w-full'>
                            {
                                statusTypes.find(item => item.status === status)?.title
                            }
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center mb-5'>
                    <h2 className='text-green-600 font-bold text-3xl'>برنامه های اخیر</h2>
                </div>
                <div>

                    <div className='duration-300 hover:bg-zinc-800 active:bg-zinc-800 p-3 flex items-center justify-between border-1 border-zinc-700'>
                        <div className='flex items-center gap-5'>
                            <div><Image src={pa} alt='image' className='rounded-xl w-15 h-15' /></div>
                            <div><h4 className='font-bold text-lg'>paypal Original</h4></div>
                        </div>
                        <div>
                            <button className='bg-zinc-800 text-zinc-400 p-3 rounded-lg ml-1'>
                                <BiPencil />
                            </button>
                            <button className='bg-red-950 text-red-500 p-3 rounded-lg'>
                                <BiTrashAlt />
                            </button>
                        </div>
                    </div>
                    <div className='duration-300 hover:bg-zinc-800 active:bg-zinc-800 p-3 flex items-center justify-between border-1 border-zinc-700'>
                        <div className='flex items-center gap-5'>
                            <div><Image src={pa} alt='image' className='rounded-xl w-15 h-15' /></div>
                            <div><h4 className='font-bold text-lg'>paypal Original</h4></div>
                        </div>
                        <div>
                            <button className='bg-zinc-800 text-zinc-400 p-3 rounded-lg ml-1'>
                                <BiPencil />
                            </button>
                            <button className='bg-red-950 text-red-500 p-3 rounded-lg'>
                                <BiTrashAlt />
                            </button>
                        </div>
                    </div>
                    <div className='duration-300 hover:bg-zinc-800 active:bg-zinc-800 p-3 flex items-center justify-between border-1 border-zinc-700'>
                        <div className='flex items-center gap-5'>
                            <div><Image src={pa} alt='image' className='rounded-xl w-15 h-15' /></div>
                            <div><h4 className='font-bold text-lg'>paypal Original</h4></div>
                        </div>
                        <div>
                            <button className='bg-zinc-800 text-zinc-400 p-3 rounded-lg ml-1'>
                                <BiPencil />
                            </button>
                            <button className='bg-red-950 text-red-500 p-3 rounded-lg'>
                                <BiTrashAlt />
                            </button>
                        </div>
                    </div>
                    <div className='duration-300 hover:bg-zinc-800 active:bg-zinc-800 p-3 flex items-center justify-between border-1 border-zinc-700'>
                        <div className='flex items-center gap-5'>
                            <div><Image src={pa} alt='image' className='rounded-xl w-15 h-15' /></div>
                            <div><h4 className='font-bold text-lg'>paypal Original</h4></div>
                        </div>
                        <div>
                            <button className='bg-zinc-800 text-zinc-400 p-3 rounded-lg ml-1'>
                                <BiPencil />
                            </button>
                            <button className='bg-red-950 text-red-500 p-3 rounded-lg'>
                                <BiTrashAlt />
                            </button>
                        </div>
                    </div>
                    <div className='duration-300 hover:bg-zinc-800 active:bg-zinc-800 p-3 flex items-center justify-between border-1 border-zinc-700'>
                        <div className='flex items-center gap-5'>
                            <div><Image src={pa} alt='image' className='rounded-xl w-15 h-15' /></div>
                            <div><h4 className='font-bold text-lg'>paypal Original</h4></div>
                        </div>
                        <div>
                            <button className='bg-zinc-800 text-zinc-400 p-3 rounded-lg ml-1'>
                                <BiPencil />
                            </button>
                            <button className='bg-red-950 text-red-500 p-3 rounded-lg'>
                                <BiTrashAlt />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminPanel