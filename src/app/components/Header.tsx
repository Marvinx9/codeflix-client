'use client';
import React from 'react'
import { UserProfile } from './UserProfile';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { useScroll } from '../hooks/useScroll';

export default function Header() {
    const isScrolled = useScroll();

    return (
    <header className={ `${isScrolled && 'bg-slate-900'} fixed top-0z-50 flex w-full items-center justify-between transition-all p-2 px-4 py-4 lg:px-16 lg:py-3`}>

    <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo/>
        <NavLinks/>
    </div>
    <UserProfile/>
    </header>
    );
}
