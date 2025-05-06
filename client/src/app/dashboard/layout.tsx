import React, { ReactNode } from 'react'
import SideBar from './sidebar/SideBar'

export default function DashboardLayout({children}: {children: ReactNode}) {
  return (
    <div className='flex min-h-screen'>
        <SideBar/>
        <main className='flex-1 bg-gray-100 p-8'>
            {children}
        </main>
    </div>
  )
}
