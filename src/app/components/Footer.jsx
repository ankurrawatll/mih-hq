import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div id="footer" className={`${greatVibes.className} pb-5 h-auto mx-1 lg:mx-5 text-white bg-black rounded-3xl flex flex-col items-center justify-center `}>
                <div className="flex flex-col gap-5 lg:flex-row justify-center lg:justify-evenly pt-14 px-5">
                    <div className={`max-w-[100%] lg:max-w-[25%] ${born2b.className} flex flex-col justify-center items-center `}>
                        <div>
                            <Image
                                src="/mainLogo.png"
                                height={200}
                                width={200}
                                alt='logo'
                            />
                        </div>
                        <h1 className="text-white text-5xl text-center">MIND INSTALLERS HACKATHON 3.0</h1>
                    </div>
                    <div className={`max-w-[100%] lg:max-w-[25%] `}>
                        <div>
                            <h1 className="text-3xl text-gray-400">Quick Links</h1>
                        </div>
                        <ul className="">
                            <li>FAQs</li>
                            <li>Timeline</li>
                            <li>Themes</li>
                            <li>Contact Us</li>
                            <li>Sponsor</li>
                        </ul>
                    </div>
                    <div className={`max-w-[100%] lg:max-w-[25%] `}>
                        <div>
                            <h1 className="text-3xl text-gray-400">Contact Us</h1>
                        </div>
                        <div className={`${born2b.className} text-2xl flex flex-col gap-3`}>
                            <div className="flex items-center gap-3 ">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/4213/4213179.png"
                                    height={25}
                                    width={25}
                                    alt='logo'
                                />
                                <p className="">+91 9717970475</p>
                            </div>
                            <div className="flex items-center gap-3 ">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/4213/4213179.png"
                                    height={25}
                                    width={25}
                                    alt='logo'
                                />
                                <p className="">+91 8826181378</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png"
                                    height={25}
                                    width={25}
                                    alt='logo'
                                />
                                <p className="">iimthackathon_gn@iimtindia.net</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/9101/9101314.png"
                                    height={25}
                                    width={25}
                                    alt='logo'
                                />
                                <p className="">Greater Noida, India</p>
                            </div>
                        </div>
                    </div>

                    <div className={`max-w-[100%] lg:max-w-[25%] `}>
                        <div>
                            <h1 className="text-3xl text-gray-400">Connect With Us</h1>
                        </div>
                        <div className={`${born2b.className} text-2xl flex items-center gap-5 mt-5`}>
                            <Link href="https://www.instagram.com/mih.iimt/">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/2504/2504918.png"
                                    height={50}
                                    width={50}
                                    alt='Instagram'
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/company/mind-installers-hackathon-3-0/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BF%2FVH1I3LTQutw6qc4trgvw%3D%3D">

                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/3955/3955056.png"
                                    height={50}
                                    width={50}
                                    alt='Linkedin'
                                />
                            </Link>
                            <Link href="https://www.instagram.com/mih.iimt/">

                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/16566/16566143.png"
                                    height={50}
                                    width={50}
                                    alt='Whatsapp'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="px-10 w-[100%] mx-10 ">
                    <div className="flex flex-col lg:flex-row border-t-2 border-t-gray-400  justify-between lg:gap-5 items-center mt-5 lg:p-5 ">
                        <div className="">
                            <p className={`${born2b.className} text-lg lg:text-2xl`}>© 2025 MIH 3.0 | All rights reserved.</p>
                        </div>
                        <div className="">

                            <p className={`${born2b.className} text-lg lg:text-2xl`}>Design & Develop By <Link href="https://www.linkedin.com/in/itsukcode/"> @devrithm </Link></p>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer