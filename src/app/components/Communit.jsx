import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image
    from 'next/image'
const Communit = () => {
    return (
        <div>
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
                        <h1 className={`${greatVibes.className} text-5xl lg:text-6xl text-center text-white`}> </h1>
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

                <div className="flex justify-center items-center gap-10">
                    <Image
                        src="https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.48_mul_h_sub_0.48_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-goog/chapter_banners/GDSC%2520Header_20240920_220019_0000_page-0001_xvOEpUl.jpg"
                        width={500}
                        height={500}
                        alt='iimt'
                        className='rounded-xl'
                    />
                    <Image
                        src="/logo SN.png"
                        width={100}
                        height={100}
                        alt='iimt'
                        className='rounded-xl'
                    />
                </div>

                <div className="flex"></div>
            </div>
        </div>
    )
}

export default Communit