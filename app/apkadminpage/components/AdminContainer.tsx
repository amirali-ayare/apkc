'use client'
import React, { useState } from 'react'
import AdminPanel from './AdminPanel'
import AdminLogin from './AdminLogin'

function AdminContainer() {
    const [isAdmin, setIsAdmin] = useState(false)

    return (
        <div>
            {isAdmin ? <AdminPanel /> : <AdminLogin setIsAdmin={setIsAdmin} />}
        </div>
    )
}

export default AdminContainer