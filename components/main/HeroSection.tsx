"use client";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";

function HeroSection() {
    const words = ["Election Campaigns", "Advertising", "Ad Films", "Portfolios", "Photo Shoots"];
    const images = [
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    return (
        <ImagesSlider className="h-[40rem]" images={images}>
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
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    The
                    <span className="text-orange-500 dark:text-orange-900">{` Random `}</span>
                    Studios
                </motion.p>

                <div className="flex justify-center items-center">
                    <div className="text-xl mx-auto font-normal text-neutral-200 dark:text-neutral-600">
                        We can help you with
                        <FlipWords words={words} className="text-orange-500 dark:text-orange-900" />
                    </div>
                </div>

                <div className="flex py-10 gap-4 items-center">
                    <FaFacebook className="h-6 w-6 text-white cursor-pointer hover:text-blue-600" />
                    <FaTwitter className="h-6 w-6 text-white cursor-pointer hover:text-blue-400" />
                    <FaLinkedinIn className="h-6 w-6 text-white cursor-pointer hover:text-blue-800" />
                    <FaInstagram className="h-6 w-6 text-white cursor-pointer hover:text-fuchsia-300" />
                </div>
            </motion.div>
        </ImagesSlider>
    );
}

export default HeroSection