import React, { ReactNode } from 'react'
import SideBar from './sidebar/SideBar'

export default function DashboardLayout({children}: {children: ReactNode}) {
  return (
    <div className='flex min-h-screen bg-gray-950'>
        <SideBar/>
        <main className='flex-1 bg-gray-100 p-8 m-2 rounded rounded-[5px]'>
            {children}
        </main>
    </div>
  )
}
