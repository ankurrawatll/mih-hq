import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'

const Versions = () => {
    return (
        <>
            <div className={`${greatVibes.className} h-[90rem] backdrop-blur-md mx-5 mt-5 px-10 rounded-3xl `} id="version">
                <div className={`${greatVibes.className} pt-8 mx-52 `}>
                    <div className="flex justify-center items-center ">
                        <div className="rotate-225 ">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                height={100}
                                width={100}
                                alt='logo'
                            />
                        </div>
                        <h1 className={`${born2b.className} text-8xl text-center text-white`}>Past Version</h1>
                        <div className="rotate-45 ">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                height={100}
                                width={100}
                                alt='logo'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Versions