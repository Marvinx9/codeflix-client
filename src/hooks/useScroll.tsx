'use client';
import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [isScrolled, setIsScroled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroled(true);
            } else {
                setIsScroled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isScrolled;
};
