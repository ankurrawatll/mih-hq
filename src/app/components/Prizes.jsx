import React from 'react'
import { born2b } from '../../../styles/font'
import { motion } from "framer-motion"
import Image from 'next/image'

const Prizes = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div id="prizes">
            <motion.div 
                className="h-auto backdrop-blur-md mx-2 lg:mx-5 mt-5 px-1 lg:px-10 rounded-3xl py-14 text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div 
                    className={`${born2b.className} text-5xl`}
                    variants={itemVariants}
                >
                    <div className="flex justify-center items-center gap-10">
                        <div className="rotate-225 hidden lg:block">
                            <div className="flame-container">
                                <div className="flame"></div>
                                <div className="flame"></div>
                                <div className="flame"></div>
                            </div>
                        </div>
                        <h1 className={`${born2b.className} text-6xl lg:text-8xl text-center text-white`}>
                            Prizes
                        </h1>
                        <div className="rotate-45 hidden lg:block">
                            <div className="flame-container">
                                <div className="flame"></div>
                                <div className="flame"></div>
                                <div className="flame"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5 lg:mt-10"
                    variants={containerVariants}
                >
                    {[
                        { position: "1st", amount: "₹ 30,000", icon: "https://cdn-icons-png.flaticon.com/128/2502/2502694.png" },
                        { position: "2nd", amount: "₹ 20,000", icon: "https://cdn-icons-png.flaticon.com/128/2502/2502698.png" },
                        { position: "3rd", amount: "₹ 15,000", icon: "https://cdn-icons-png.flaticon.com/128/2502/2502702.png" }
                    ].map((prize, index) => (
                        <motion.div 
                            key={index}
                            className='literal-container p-5 rounded-2xl max-w-[100%] lg:min-w-[30%] min-h-[20rem] border-2 border-orange-500/30 backdrop-blur-md bg-black/50 shadow-[0_0_20px_rgba(255,87,34,0.1)] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(255,87,34,0.2)] transition-all duration-300'
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col items-center justify-center h-full gap-6">
                                <Image 
                                    alt="logo" 
                                    width={80} 
                                    height={80} 
                                    src={prize.icon}
                                    className="prize-icon"
                                />
                                <h1 className={`${born2b.className} text-6xl text-center text-white`}>{prize.position}</h1>
                                <p className={`${born2b.className} text-5xl text-center text-gray-300`}>{prize.amount}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <style jsx>{`
                    .literal-container {
                        background: rgba(0, 0, 0, 0.7);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        border: 2px solid rgba(255, 87, 34, 0.3);
                        box-shadow: 
                            0 8px 32px 0 rgba(255, 87, 34, 0.1),
                            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
                        transition: all 0.3s ease;
                        position: relative;
                        overflow: hidden;
                    }

                    .literal-container::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(45deg, 
                            rgba(255, 69, 0, 0.2),
                            rgba(255, 140, 0, 0.2),
                            rgba(255, 215, 0, 0.2)
                        );
                        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
                        -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
                        -webkit-mask-composite: destination-out;
                        mask-composite: exclude;
                        animation: border-flicker 1.5s infinite alternate;
                    }

                    .literal-container:hover {
                        border-color: rgba(255, 87, 34, 0.5);
                        box-shadow: 
                            0 8px 32px 0 rgba(255, 87, 34, 0.2),
                            inset 0 0 0 1px rgba(255, 255, 255, 0.2);
                    }

                    .prize-icon {
                        filter: drop-shadow(0 0 10px rgba(255, 87, 34, 0.3));
                        transition: all 0.3s ease;
                        width: 80px;
                        height: 80px;
                        object-fit: contain;
                    }

                    .literal-container:hover .prize-icon {
                        filter: drop-shadow(0 0 15px rgba(255, 87, 34, 0.5));
                        transform: scale(1.1);
                    }

                    .literal-container h1 {
                        text-shadow: 0 0 10px rgba(255, 87, 34, 0.3);
                        margin: 0;
                        line-height: 1;
                    }

                    .literal-container p {
                        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                        margin: 0;
                        line-height: 1;
                    }

                    @keyframes border-flicker {
                        0% {
                            border-color: rgba(255, 87, 34, 0.3);
                            box-shadow: 0 0 20px rgba(255, 87, 34, 0.2);
                        }
                        25% {
                            border-color: rgba(255, 87, 34, 0.5);
                            box-shadow: 0 0 30px rgba(255, 87, 34, 0.3);
                        }
                        50% {
                            border-color: rgba(255, 87, 34, 0.7);
                            box-shadow: 0 0 40px rgba(255, 87, 34, 0.4);
                        }
                        75% {
                            border-color: rgba(255, 87, 34, 0.5);
                            box-shadow: 0 0 30px rgba(255, 87, 34, 0.3);
                        }
                        100% {
                            border-color: rgba(255, 87, 34, 0.3);
                            box-shadow: 0 0 20px rgba(255, 87, 34, 0.2);
                        }
                    }

                    .flame-container {
                        position: relative;
                        width: 100px;
                        height: 100px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .flame {
                        position: absolute;
                        width: 40px;
                        height: 40px;
                        background: linear-gradient(45deg, #ff4500, #ff8c00, #ffd700);
                        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                        filter: blur(3px);
                        animation: flicker 1.5s infinite alternate;
                        box-shadow: 0 0 20px #ff4500, 0 0 40px #ff8c00, 0 0 60px #ffd700;
                    }

                    .flame:nth-child(1) {
                        width: 40px;
                        height: 40px;
                        animation-delay: 0s;
                        background: linear-gradient(45deg, #ff4500, #ff8c00);
                    }

                    .flame:nth-child(2) {
                        width: 30px;
                        height: 30px;
                        animation-delay: 0.2s;
                        transform: translateY(-15px);
                        background: linear-gradient(45deg, #ff8c00, #ffd700);
                    }

                    .flame:nth-child(3) {
                        width: 20px;
                        height: 20px;
                        animation-delay: 0.4s;
                        transform: translateY(-30px);
                        background: linear-gradient(45deg, #ffd700, #ffffff);
                    }

                    @keyframes flicker {
                        0% {
                            transform: scale(1) translateY(0);
                            opacity: 1;
                            filter: blur(3px);
                        }
                        25% {
                            transform: scale(1.1) translateY(-3px);
                            opacity: 0.9;
                            filter: blur(2px);
                        }
                        50% {
                            transform: scale(0.95) translateY(2px);
                            opacity: 0.95;
                            filter: blur(4px);
                        }
                        75% {
                            transform: scale(1.05) translateY(-2px);
                            opacity: 0.85;
                            filter: blur(3px);
                        }
                        100% {
                            transform: scale(1) translateY(0);
                            opacity: 1;
                            filter: blur(3px);
                        }
                    }
                `}</style>
            </motion.div>
        </div>
    )
}

export default Prizes