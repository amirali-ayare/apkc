import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import aboutLogo from '@/public/image/about.png'

function page() {
    return (
        <div className='bg-zinc-900 p-5'>
            <div className='flex justify-center items-center mb-5'>
                <Link href={'/'}>
                    <span className='text-zinc-500 text-lg font-light'>خانه</span>
                </Link>
                <IoIosArrowBack className='inline mr-2 text-zinc-500' />
                <span className='text-3xl mr-2 text-green-600 font-black'>درباره ما</span>
            </div>

            <div className='pt-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='order-2 md:order-1'>
                    <p className='text-zinc-400 leading-8 text-justify'>
                        وبسایت ما یک منبع معتبر و معتبر در زمینه ارائه برنامه‌ها و بازی‌های مود شده و رایگان است. با چندین سال سابقه فعالیت، هدف ما فراهم کردن دسترسی آسان و رایگان به جدیدترین نسخه‌های بازی‌ها و برنامه‌های متنوع است تا کاربران بتوانند تجربه‌ای بهتر و هیجان‌انگیزتر داشته باشند.
                        ما همچنین ترفندها، راهنماهای آموزشی و نکات کاربردی را در حوزه بازی‌ها و برنامه‌ها به کاربران عرضه می‌کنیم تا بتوانند به راحتی مهارت‌های خود را ارتقاء دهند و از امکانات بیشتری بهره‌مند شوند. تیم ما متعهد است که همیشه به‌روزترین و امن‌ترین محتوا را در اختیار کاربران قرار دهد و با پاسخگویی سریع و پشتیبانی مستمر، رضایت کامل شما را جلب کند.
                        با ما همراه باشید و دنیای بازی‌ها و برنامه‌ها را به شکل رایگان و مود شده تجربه کنید!
                    </p>
                </div>

                <div className='flex justify-center order-1 md:order-2'>
                    <Image src={aboutLogo} alt='about logo' className='w-75'/>
                </div>
            </div>
        </div>
    )
}

export default page