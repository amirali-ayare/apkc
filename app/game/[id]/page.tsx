import Image from 'next/image'
import React from 'react'
import img from '@/public/image/paypal.png'

function page() {
    return (
        <div className='bg-zinc-900 text-white p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex items-center flex-col md:flex-row gap-3'>
                <div>
                    <div><Image src={img} alt='image' className='rounded-2xl min-w-50 min-h-50 max-w-50 max-h-50'/></div>
                </div>
                <div>
                    <h2 className='text-white font-bold text-3xl'>Tisfang vpn</h2>
                    <h5 className='text-zinc-400 text-sm mt-1.5 font-light'>نسخه: 19.23</h5>
                    <h5 className='text-zinc-400 text-sm mt-1.5 font-light'>آخرین آپدیت: 12 اردیبهشت</h5>
                    <h5 className='text-zinc-400 text-sm mt-1.5 font-light'>حجم: 123 مگابایت</h5>
                    <button className='bg-emerald-500 hover:bg-emerald-700 active:bg-emerald-700 duration-300 rounded-md w-full mt-11 py-2'>دانلود</button>
                </div>
            </div>

            <div>
                <p className='text-zinc-400 font-light text-justify'>
                    Eternium: Mage And Minions – میج و مینیون ها یک بازی نقش آفرینی با گرافیک اچ دی و صحنه های خیره کننده HD از استودیوی بازیسازی Making Fun, Inc برای اندروید است که به صورت رایگان عرضه شده است و تا به این لحظه بیش از 500 هزار بازیکن از سراسر جهان را به سمت خود کشانده است. در این بازی شما در نقش شخصیت اصلی بازی و یک قهرمان باید به نقش آفرینی مشغول شوید و دشمنان مختلف اعم از شیاطین، اسکلت ها و هیولاها را یکی پس از دیگری از بین ببرید و با جمع آوری دستاوردها و مهارت های منحصر به فرد قدرت خود را چندین برابر کنید. اگر به بازی های آر پی جی علاقه مندید و دوست دارید یکی از بهترین بازی های این سبک را تجربه کنید که علاوه بر داشتن حالا آفلاین بتوانید با کاربران دیگر به رقابت بپردازید، بازی پیش رو را از دست ندهید.
                </p>
            </div>
        </div>
    )
}

export default page