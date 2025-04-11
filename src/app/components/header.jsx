"use client"
import React, { useEffect, useState } from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Navbar from '../utils/Navbar'
import Counter from '../utils/Counter'
import Image from 'next/image'
import Link from 'next/link'



const Header = () => {



    return (
        <div className="relative h-auto">
            <Navbar />

            <div className="relative z-20 flex items-center justify-center flex-col text-white gap-5">
                <Image
                src="https://cdn.universitykart.com//Content/upload/admin/k0tevuvr.1k4.png"
                width={220}
                height={220}
                alt='logo'
                className='mt-10 text-center mr-16 rounded-xl'
                />
                <div className="flex ">
                    <div className="rotate-237 relative top-20 hidden lg:block">
                        <Image src="/weapon.png" height={120} width={120} alt="logo" />
                    </div>
                    <h1 className={`${born2b.className} drop-shadow-2xl text-6xl lg:text-[9rem] leading-12 lg:leading-24 text-center font-bold mt-6`}>
                        MIND INSTALLERS <br />HACKATHON <span className="text-orange-500">3.O</span>
                    </h1>
                    <div className="rotate-54 relative top-20 hidden lg:block">
                        <Image src="/weapon.png" height={120} width={120} alt="logo" />
                    </div>
                </div>
                <h2 className={`${greatVibes.className} text-2xl lg:text-3xl text-center`}>
                    FORGE YOUR CODE. DEFEND YOUR GLORY!
                </h2>
            </div>

            <Counter/>

            <div className="flex justify-center items-center text-2xl text-white relative mt-8 lg:mt-10 hover:scale-95">
                <Link href="https://unstop.com/hackathons/mind-installers-hackathon-3o-iimt-college-of-engineering-iimt-coe-greater-noida-1454209">
                    <button className={`${greatVibes.className} cursor-pointer transition px-7 py-3 bg-orange-500 rounded-3xl`}>Register Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
