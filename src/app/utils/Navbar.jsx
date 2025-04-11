import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center h-20">
                        <div className="glass-nav">
                            <div className="flex items-center space-x-10">
                                <Link href="#about" className={`${born2b.className} nav-link`}>
                                    <span>About</span>
                                </Link>
                                <Link href="#track" className={`${born2b.className} nav-link`}>
                                    <span>Timeline</span>
                                </Link>
                                <Link href="#rules" className={`${born2b.className} nav-link`}>
                                    <span>Rules</span>
                                </Link>
                                <Link href="#prizes" className={`${born2b.className} nav-link`}>
                                    <span>Prizes</span>
                                </Link>
                                
                                <div className="logo-container">
                                    <Image
                                        src="/mainLogo.png"
                                        height={100}
                                        width={100}
                                        alt='logo'
                                        className="rounded-full"
                                    />
                                </div>

                                <Link href="#sponsor" className={`${born2b.className} nav-link`}>
                                    <span>Sponsor</span>
                                </Link>
                                <Link href="#past" className={`${born2b.className} nav-link`}>
                                    <span>Past Hackathon</span>
                                </Link>
                                <Link href="#contact" className={`${born2b.className} nav-link`}>
                                    <span>Contact</span>
                                </Link>
                                <Link href="#footer" className={`${born2b.className} nav-link`}>
                                    <span>Footer</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <style jsx>{`
                .glass-nav {
                    background: rgba(255, 87, 34, 0.2);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 30px;
                    padding: 0.3rem 1.2rem;
                    box-shadow: 0 8px 32px 0 rgba(255, 87, 34, 0.2);
                    border: 4px solid rgba(255, 87, 34, 0.8);
                }
                .nav-link {
                    color: white;
                    text-decoration: none;
                    font-size: 2.4rem;
                    font-weight: bold;
                    transition: all 0.3s ease;
                    padding: 0.2rem 0.6rem;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                    border: 2px solid black;
                }
                .nav-link:hover {
                    background: rgba(255, 87, 34, 0.3);
                    transform: translateY(-2px);
                }
                .logo-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 0.6rem;
                }
            `}</style>
        </>
    )
}

export default Navbar