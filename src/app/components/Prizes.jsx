import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from "next/image"
const Prizes = () => {
    return (
        <div id="prizes">

            <div  className={`${born2b.className} h-auto backdrop-blur-md mx-2 lg:mx-5 mt-5 px-1 lg:px-10 rounded-3xl py-14 text-white`}>
                <div className={`${greatVibes.className} text-5xl`}>
                    <div className="flex justify-center items-center gap-10 ">
                        <div className="rotate-225 hidden lg:block ">
                            {/* <Image
                                            src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                            height={100}
                                            width={100}
                                            alt='logo'
                                        /> */}
                        </div>
                        <h1 className={`${greatVibes.className} text-6xl lg:text-8xl text-center text-white`}>Prizes </h1>
                        <div className="rotate-45 hidden lg:block ">
                            {/* <Image
                                            src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                            height={100}
                                            width={100}
                                            alt='logo'
                                        /> */}
                        </div>
                    </div>
                </div>

                <div className="flex mt-16 justify-center items-center gap-20">
                    <div className="border rounded-3xl p-16 border-gray-400 flex justify-center items-center flex-col hover:scale-105">

                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/2502/2502694.png"
                            height={100}
                            width={100}
                            alt='logo'
                        />

                        <h1 className="text-8xl text-center">1st</h1>
                        <p className="text-center text-7xl text-gray-300">₹ 30,000</p>
                    </div>
                    <div className="border rounded-3xl p-16 border-gray-400 flex justify-center items-center flex-col hover:scale-105">

                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/2502/2502698.png"
                            height={100}
                            width={100}
                            alt='logo'
                        />

                        <h1 className="text-8xl text-center">2nd</h1>
                        <p className="text-center text-7xl text-gray-300">₹ 20,000</p>
                    </div>
                    <div className="border rounded-3xl p-16 border-gray-400 flex justify-center items-center flex-col hover:scale-105">

                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/2502/2502702.png"
                            height={100}
                            width={100}
                            alt='logo'
                        />

                        <h1 className="text-8xl text-center">3rd</h1>
                        <p className="text-center text-7xl text-gray-300">₹ 15,000</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Prizes