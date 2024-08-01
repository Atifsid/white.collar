'use client';
import React from 'react';
import { ImagesSlider } from '../ui/images-slider';
import { motion } from 'framer-motion';
import { FlipWords } from '../ui/flip-words';
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { IoArrowDownCircleOutline } from 'react-icons/io5';

function HeroSection() {
  const words = [
    'Election Campaigns',
    'Advertising',
    'Ad Films',
    'Portfolios',
    'Photo Shoots',
  ];
  const images = [
    'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  return (
    <ImagesSlider className='h-screen bg-cover' images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className='z-50 flex flex-col items-center justify-center'
      >
        <motion.p className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-4xl font-bold text-transparent md:text-5xl'>
          The
          <span className='font-bold text-red-500 dark:text-red-900'>{` White `}</span>
          Collar Group
        </motion.p>

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
      </motion.div>
    </ImagesSlider>
  );
}

export default HeroSection;