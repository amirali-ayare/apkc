import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/image/apkclub_logo.png'

function Footer() {

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
        <div className='grid grid-cols-1 lg:grid-cols-3 p-5 bg-zinc-900 gap-8'>
            <div>
                {
                    links.map((item, index) => {
                        return (
                            <Link href={item.link} key={index}><h6 className='text-zinc-500 my-2 hover:text-green-600 active:text-green-600'>{item.txt}</h6></Link>
                        )
                    })
                }
            </div>

            <div>
                <p className='text-zinc-500 font-thin text-justify'>
                    جدیدترین و بروزترین برنامه ها، آموزش ها، دوره ها و ... در <span className='text-green-600'>ApkClub</span> میتوانید دریافت کنید.
                    در این سال‌ها تلاش کرده‌ایم تا همچون یکی از اعضای خانواده شما در کنارتان باشیم. صد البته که در این مسیر تا حد زیادی موفق بوده‌ایم.
                    به روز بودن و عرضه بازی و برنامه های نایاب مود شده از اهداف ویژه <span className='text-green-600'>ApkClub</span> است و تلاش کرده ایم تا با ایده های خاص همواره جلوتر از سایر رقبا باشیم و خرسندیم که در اکثر زمینه‌های رقابت پیشرو بوده‌ایم.
                </p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <Link href={'/'}><Image src={logo} alt='logo' className='w-40' /></Link>
                <h1 className='text-3xl mt-2 text-green-600 font-bold'>ApkClub</h1>
            </div>
        </div>
    )
}

export default Footer