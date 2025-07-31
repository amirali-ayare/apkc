import React from 'react'
import { FaLink } from "react-icons/fa6";


function Creator() {
    return (
        <div className='p-5 flex justify-center bg-zinc-900 font-thin duration-500 text-zinc-400 hover:text-sky-500 active:text-sky-500'>
            <a href='https://t.me/cvact'>
                <h1>
                    <FaLink className='inline text-sky-500 ml-1 shake' />
                    Created By Amirali
                </h1>
            </a>
        </div>
    )
}

export default Creator