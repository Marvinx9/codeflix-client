import React from 'react'

export default function Header() {
    return (
        <header className='fixed top-0z-50 flex w-full items-center justify-between px-4 py-4 lg:px-10 lg:py-6'>
            <div className='flex items-center space-x-2 md:space-x-4'>
                <img src='logo/logo.svg' alt='netflix' width={120} height={120}/>
                <ul className='hidden md:space-x-4 text-sm font-semibold md:flex'>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                </ul>
            </div>
        </header>
    )
}