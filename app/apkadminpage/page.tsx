'use client'
import React, { useState } from 'react'
import AdminLogin from './components/AdminLogin'
import AdminPanel from './components/AdminPanel'

function page() {

    const [isAdmin, setIsAdmin] = useState(false)

    return (
        <div className='bg-zinc-900 p-5 text-white'>
            {isAdmin ? <AdminPanel /> : <AdminLogin setIsAdmin={setIsAdmin}/>}
        </div>
    )
}

export default page