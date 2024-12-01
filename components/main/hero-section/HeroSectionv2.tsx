'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa';
import { IoArrowDownCircleOutline } from 'react-icons/io5';
import { FlipWords } from '@/components/ui/flip-words';

function HeroSection() {
    const words = [
        'Election Campaigns',
        'Advertising',
        'Ad Films',
        'Portfolios',
        'Photo Shoots',
    ];

    return (
        <>
            <div className='flex items-center justify-center text-center'>
                <div className='mx-auto text-neutral-200 dark:text-neutral-600'>
                    We can help you with
                    <FlipWords
                        words={words}
                        className='font-bold text-red-500 dark:text-red-900'
                    />
                </div>
            </div>

            <div className='flex items-center gap-4 py-10'>
                <FaFacebook className='h-6 w-6 cursor-pointer text-white hover:text-blue-600' />
                <FaTwitter className='h-6 w-6 cursor-pointer text-white hover:text-blue-400' />
                <FaLinkedinIn className='h-6 w-6 cursor-pointer text-white hover:text-blue-800' />
                <FaInstagram className='h-6 w-6 cursor-pointer text-white hover:text-fuchsia-300' />
                <FaYoutube className='h-6 w-6 cursor-pointer text-white hover:text-red-600' />
            </div>

            <button
                type='button'
                className='my-6 animate-bounce cursor-pointer'
                onClick={() => document.getElementById('services')?.scrollIntoView()}
            >
                <IoArrowDownCircleOutline className='h-12 w-12 text-red-500' />
            </button>
        </>
    )
}

export default HeroSection;