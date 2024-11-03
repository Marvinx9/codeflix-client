import React from 'react';

export const UserProfile = () => (
    <div className='flex items-center space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
        <img src='banner/profile.png' alt='profile' width={25} height={25} className='cursor-pointer rounded' />
    </div>
);
