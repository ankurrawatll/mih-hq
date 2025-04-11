import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'
const Supported = () => {
    return (

        <div className={`${greatVibes.className} h-auto backdrop-blur-md mx-2 lg:mx-5 mt-5 px-1 lg:px-10 rounded-3xl py-14 text-white`}>
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
                    <h1 className={`${greatVibes.className} text-5xl lg:text-6xl text-center text-white`}>Supported By </h1>
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


            <div className="mt-10">
                <div className="flex justify-center items-center gap-20">
                <Image
                    src="/Csi_logo_india.png"
                    width={100}
                    height={100}
                    alt='csi'
                    className='rounded-xl'
                />
                <Image
                    src="/ishare.png"
                    width={200}
                    height={200}
                    alt='csi'
                    className='rounded-xl'
                />
                <Image
                    src="/iste.png"
                    width={100}
                    height={100}
                    alt='csi'
                    className='rounded-xl'
                />
                <Image
                    src="/ashare.png"
                    width={100}
                    height={100}
                    alt='csi'
                    className='rounded-xl'
                />
                </div>
            </div>
        </div>

    )
}

export default Supported