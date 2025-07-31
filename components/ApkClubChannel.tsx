import Image from 'next/image'
import React from 'react'
import android from '../public/image/androidTelegram2.png'

function ApkClubChannel() {
    return (
        <div className='p-5 mt-5 text-white grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col items-center md:items-start justify-center order-2 md:order-1'>
                <h1 className='text-2xl md:text-4xl font-bold text-center md:text-right'>به کانال بزرگ <span className='text-green-600 font-black'>ApkClub</span> بپیوندید</h1>
                <h4 className='text-zinc-400 text-center md:text-right mt-2 text-sm md:text-base'>
                    با کانال ما تمام اخبار، ترفندها را دنبال کنید و در چالش ها شرکت کنید.
                </h4>
                <div>
                    <a href='https://t.me/apkclub'>
                        <button className='px-4 py-1 cursor-pointer border-2 mt-3 border-green-600 rounded-full'>عضویت</button>
                    </a>
                </div>
            </div>

            <div className='flex items-center justify-center order-1 md:order-2'>
                <Image src={android} alt='android' className='w-70'/>
            </div>
        </div>
    )
}

export default ApkClubChannel