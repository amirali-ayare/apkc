import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ADMIN_PASSWORD } from '@/key/adminKey'

type TAdmin = {
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>
}

function AdminLogin({ setIsAdmin }: TAdmin) {

    const schema = yup.object().shape({
        username: yup.string().oneOf([ADMIN_PASSWORD.username], 'نام کاربری اشتباه است').required(),
        password: yup.string().oneOf([ADMIN_PASSWORD.password], 'رمز عبور اشتباه است').required()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onFormSubmit = () => {
        // set is admin
        console.log('hello admin');
        setIsAdmin(true)
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className='h-full w-full flex flex-col items-center justify-center'>
            <div><h1 className='text-green-600 font-black text-3xl'>پنل ادمین</h1></div>
            <div className='my-5'>
                <input type="text" {...register("username")} placeholder='نام کاربری...' className='p-3 rounded-xl border-1 border-zinc-500 outline-none' />
                {
                    errors.username && (
                        <h5 className='text-red-600 text-xs mt-2'>{errors.username?.message}</h5>
                    )}
            </div>
            <div>
                <input type="text" {...register("password")} placeholder='رمز عبور...' className='p-3 rounded-xl border-1 border-zinc-500 outline-none' />
                {
                    errors.password && (
                        <h5 className='text-red-600 text-xs mt-2'>{errors.password?.message}</h5>
                    )}
            </div>
            <div className='my-5'>
                <button type='submit' className='cursor-pointer duration-300 hover:bg-green-800 active:bg-green-800 bg-green-600 p-3 rounded-xl w-50'>تایید</button>
            </div>
        </form>
    )
}

export default AdminLogin