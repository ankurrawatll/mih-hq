import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'
import { motion } from "framer-motion"

const Rules = () => {
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

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className="min-h-[90rem] backdrop-blur-md mx-2 lg:mx-5 mt-5 py-5 px-1 lg:px-10 rounded-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <motion.div 
                className="pt-8 flex justify-center items-center gap-8"
                variants={itemVariants}
            >
                <div className="rotate-225 hidden lg:block">
                    <div className="flame-container">
                        <div className="flame"></div>
                        <div className="flame"></div>
                        <div className="flame"></div>
                    </div>
                </div>
                <motion.h1 
                    className={`${born2b.className} hidden lg:block text-4xl lg:text-7xl text-center text-white leading-20`}
                    variants={titleVariants}
                >
                    Mind Installers <br />Hackathon 3.O
                </motion.h1>
                <div className="rotate-45 hidden lg:block">
                    <div className="flame-container">
                        <div className="flame"></div>
                        <div className="flame"></div>
                        <div className="flame"></div>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:mt-10 lg:border-b pb-5 border-b-gray-400"
                variants={itemVariants}
            >
                <motion.div 
                    className={`${greatVibes.className} text-3xl pt-14 relative max-w-[100%] lg:min-w-[30%] lg:border-r border-r-gray-400`}
                    variants={titleVariants}
                >
                    <motion.h1 
                        className={`${greatVibes.className} text-6xl text-center text-white lg:pr-10`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        Rules & <br />Guidelines
                    </motion.h1>
                </motion.div>

                <motion.div 
                    className={`${born2b.className} max-w-[100%] lg:min-w-[70%]`}
                    variants={itemVariants}
                >
                    <motion.div 
                        className='glass-card p-5 rounded-2xl border-2 border-orange-500/30 backdrop-blur-md bg-black/50 shadow-[0_0_20px_rgba(255,87,34,0.1)] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(255,87,34,0.2)] transition-all duration-300'
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.h1 
                            className="text-3xl text-white mb-4"
                            whileHover={{ color: "#ff8c00" }}
                            transition={{ duration: 0.3 }}
                        >
                            1. General Rules :
                        </motion.h1>
                        <div className="pl-5 text-gray-300 text-xl space-y-3">
                            {[
                                "The Hackathon is open to all eligible participants for college students.",
                                "Participants must register as a team (team size: 2-4 members). Solo participation is not allowed.",
                                "Each team must submit their project idea and implementation details within the given deadline(To be announced).",
                                "Submissions must align with the open innovation theme, ensuring originality and feasibility."
                            ].map((rule, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex gap-3 items-start"
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.span 
                                        className="text-orange-500"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        •
                                    </motion.span>
                                    <p>{rule}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div 
                className={`${born2b.className} flex flex-col lg:flex-row justify-center items-center gap-5 mt-5 lg:mt-10`}
                variants={itemVariants}
            >
                <motion.div 
                    className='dark-container p-5 rounded-2xl max-w-[100%] lg:min-w-[50%] min-h-[26rem] border-2 border-orange-500/30 backdrop-blur-md bg-black/50 shadow-[0_0_20px_rgba(255,87,34,0.1)] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(255,87,34,0.2)] transition-all duration-300'
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h1 
                        className="text-3xl text-white mb-4"
                        whileHover={{ color: "#ff8c00" }}
                        transition={{ duration: 0.3 }}
                    >
                        2. Project Submission :
                    </motion.h1>
                    <div className="pl-5 text-gray-300 text-xl space-y-3">
                        <motion.div 
                            className="flex gap-3 items-start"
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.span 
                                className="text-orange-500"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                •
                            </motion.span>
                            <p>Teams must submit a well-documented project proposal (Provided Template), including :</p>
                        </motion.div>
                        <motion.div 
                            className="flex flex-col text-lg ml-8 space-y-2"
                            variants={itemVariants}
                        >
                            {[
                                "Problem statement",
                                "Proposed solution",
                                "Technology stack",
                                "Implementation approach",
                                "Expected impact"
                            ].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    className="text-orange-500"
                                    whileHover={{ 
                                        x: 5,
                                        color: "#ffd700"
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.div>
                        {[
                            "A demo video (max 5 minutes) explaining the idea and progress.(Optional)",
                            "Code repositories (GitHub/GitLab/Bitbucket) must be shared if applicable."
                        ].map((text, index) => (
                            <motion.div 
                                key={index}
                                className="flex gap-3 items-start"
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.span 
                                    className="text-orange-500"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    •
                                </motion.span>
                                <p>{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className='dark-container p-5 rounded-2xl max-w-[100%] lg:min-w-[50%] min-h-[26rem] border-2 border-orange-500/30 backdrop-blur-md bg-black/50 shadow-[0_0_20px_rgba(255,87,34,0.1)] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(255,87,34,0.2)] transition-all duration-300'
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h1 
                        className="text-3xl text-white mb-4"
                        whileHover={{ color: "#ff8c00" }}
                        transition={{ duration: 0.3 }}
                    >
                        3. Evaluation Criteria :
                    </motion.h1>
                    <div className="pl-5 text-gray-300 text-xl space-y-3">
                        {[
                            "Innovation & Creativity (30%) – Novelty of the idea and uniqueness.",
                            "Technical Feasibility (30%) – Implementation approach and technology used.",
                            "Impact & Usefulness (20%) – Real-world applicability and scalability.",
                            "Presentation & Clarity (20%) – Quality of documentation and demo video."
                        ].map((criterion, index) => (
                            <motion.div 
                                key={index}
                                className="flex gap-3 items-start"
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.span 
                                    className="text-orange-500"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    •
                                </motion.span>
                                <p>{criterion}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <motion.div 
                className={`${born2b.className} flex flex-col lg:flex-row justify-center items-center gap-5 mt-5 lg:mt-10`}
                variants={itemVariants}
            >
                <motion.div 
                    className='literal-container p-5 rounded-2xl max-w-[100%] lg:min-w-[50%] min-h-[20rem] border-2 border-orange-500/30 backdrop-blur-md bg-black/50 shadow-[0_0_20px_rgba(255,87,34,0.1)] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(255,87,34,0.2)] transition-all duration-300'
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h1 
                        className="text-3xl text-white mb-4"
                        whileHover={{ color: "#ff8c00" }}
                        transition={{ duration: 0.3 }}
                    >
                        4. Originality & Ethics :
                    </motion.h1>
                    <div className="pl-5 text-gray-300 text-xl space-y-3">
                        {[
                            "Teams must ensure originality—no plagiarism or use of pre-existing projects.",
                            "AI-generated or automated submissions without actual development are not allowed.",
                            "Any attempt to manipulate submissions or misrepresent work will lead to disqualification."
                        ].map((rule, index) => (
                            <motion.div 
                                key={index}
                                className="flex gap-3 items-start"
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.span 
                                    className="text-orange-500"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    •
                                </motion.span>
                                <p>{rule}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className='literal-container p-5 rounded-2xl max-w-[100%] lg:min-w-[50%] min-h-[20rem] border-2 border-orange-500/30 backdrop-blur-md bg-black/50 shadow-[0_0_20px_rgba(255,87,34,0.1)] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(255,87,34,0.2)] transition-all duration-300'
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h1 
                        className="text-3xl text-white mb-4"
                        whileHover={{ color: "#ff8c00" }}
                        transition={{ duration: 0.3 }}
                    >
                        5. Communication & Deadlines :
                    </motion.h1>
                    <div className="pl-5 text-gray-300 text-xl space-y-3">
                        {[
                            "All communication will be done via the official hackathon Email channel.",
                            "Teams must submit their project before the submission deadline (to be announced)—late submissions will not be considered.",
                            "The top-performing teams will be shortlisted for the final offline round."
                        ].map((rule, index) => (
                            <motion.div 
                                key={index}
                                className="flex gap-3 items-start"
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.span 
                                    className="text-orange-500"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    •
                                </motion.span>
                                <p>{rule}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <style jsx>{`
                .glass-card {
                    background: rgba(13, 14, 17, 0.7);
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

                .glass-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border: 2px solid transparent;
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

                .glass-card::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg,
                        rgba(255, 255, 255, 0.05) 0%,
                        rgba(255, 255, 255, 0.02) 100%
                    );
                    z-index: 1;
                }

                .glass-card:hover {
                    border-color: rgba(255, 87, 34, 0.5);
                    box-shadow: 
                        0 8px 32px 0 rgba(255, 87, 34, 0.2),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }

                .glass-card h1 {
                    position: relative;
                    padding-bottom: 10px;
                    color: rgba(255, 255, 255, 0.95);
                    text-shadow: 0 0 10px rgba(255, 87, 34, 0.3);
                    border-bottom: 1px solid rgba(255, 87, 34, 0.3);
                    margin-bottom: 1.5rem;
                    z-index: 2;
                }

                .glass-card .pl-5 {
                    padding-left: 1.5rem;
                    border-left: 1px solid rgba(255, 87, 34, 0.2);
                    margin-left: 0.5rem;
                    z-index: 2;
                }

                .glass-card p {
                    color: rgba(200, 200, 200, 0.9);
                    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                    margin: 0.75rem 0;
                    padding-left: 0.5rem;
                    z-index: 2;
                }

                .glass-card .text-orange-500 {
                    color: rgba(255, 87, 34, 0.8);
                    text-shadow: 0 0 8px rgba(255, 87, 34, 0.4);
                    margin-right: 0.5rem;
                    z-index: 2;
                }

                .glass-card .flex {
                    margin: 1rem 0;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    z-index: 2;
                }

                .glass-card .flex:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 87, 34, 0.2);
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

                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }

                @keyframes glow {
                    0% { text-shadow: 0 0 5px rgba(255, 87, 34, 0.5); }
                    50% { text-shadow: 0 0 20px rgba(255, 87, 34, 0.8); }
                    100% { text-shadow: 0 0 5px rgba(255, 87, 34, 0.5); }
                }

                .dark-container, .literal-container {
                    margin: 2rem 0;
                    padding: 2rem;
                    border-radius: 1rem;
                    background: rgba(13, 14, 17, 0.8);
                    backdrop-filter: blur(10px);
                    border: 2px solid rgba(255, 87, 34, 0.3);
                    box-shadow: 
                        0 0 20px rgba(255, 87, 34, 0.1),
                        0 0 40px rgba(255, 87, 34, 0.05),
                        inset 0 0 20px rgba(255, 87, 34, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                }

                .dark-container::after, .literal-container::after {
                    content: '';
                    position: absolute;
                    bottom: -1rem;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, 
                        rgba(255, 87, 34, 0) 0%,
                        rgba(255, 87, 34, 0.5) 50%,
                        rgba(255, 87, 34, 0) 100%
                    );
                }

                .dark-container h1, .literal-container h1 {
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid rgba(255, 87, 34, 0.3);
                    position: relative;
                }

                .dark-container h1::after, .literal-container h1::after {
                    content: '';
                    position: absolute;
                    bottom: -0.5rem;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, 
                        rgba(255, 87, 34, 0) 0%,
                        rgba(255, 87, 34, 0.3) 50%,
                        rgba(255, 87, 34, 0) 100%
                    );
                }

                .dark-container p, .literal-container p {
                    margin: 0.5rem 0;
                    line-height: 1.6;
                    position: relative;
                    padding-left: 1rem;
                }

                .dark-container p::before, .literal-container p::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0.5rem;
                    bottom: 0.5rem;
                    width: 1px;
                    background: linear-gradient(to bottom,
                        rgba(255, 87, 34, 0) 0%,
                        rgba(255, 87, 34, 0.3) 50%,
                        rgba(255, 87, 34, 0) 100%
                    );
                }

                .dark-container li, .literal-container li {
                    margin: 0.5rem 0;
                    padding-left: 1rem;
                    position: relative;
                }

                .dark-container li::before, .literal-container li::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0.5rem;
                    bottom: 0.5rem;
                    width: 1px;
                    background: linear-gradient(to bottom,
                        rgba(255, 87, 34, 0) 0%,
                        rgba(255, 87, 34, 0.3) 50%,
                        rgba(255, 87, 34, 0) 100%
                    );
                }

                .dark-container .flex, .literal-container .flex {
                    margin: 0.75rem 0;
                    position: relative;
                }

                .dark-container .flex::after, .literal-container .flex::after {
                    content: '';
                    position: absolute;
                    bottom: -0.5rem;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, 
                        rgba(255, 87, 34, 0) 0%,
                        rgba(255, 87, 34, 0.2) 50%,
                        rgba(255, 87, 34, 0) 100%
                    );
                }

                .dark-container .space-y-3 > *, .literal-container .space-y-3 > * {
                    margin-top: 0.75rem;
                    margin-bottom: 0.75rem;
                    position: relative;
                }

                .dark-container .space-y-3 > *::after, .literal-container .space-y-3 > *::after {
                    content: '';
                    position: absolute;
                    bottom: -0.25rem;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, 
                        rgba(255, 87, 34, 0) 0%,
                        rgba(255, 87, 34, 0.1) 50%,
                        rgba(255, 87, 34, 0) 100%
                    );
                }

                .dark-container .ml-8, .literal-container .ml-8 {
                    margin-left: 2rem;
                    position: relative;
                }

                .dark-container .ml-8::before, .literal-container .ml-8::before {
                    content: '';
                    position: absolute;
                    left: -1rem;
                    top: 0;
                    bottom: 0;
                    width: 1px;
                    background: linear-gradient(to bottom,
                        rgba(255, 87, 34, 0) 0%,
                        rgba(255, 87, 34, 0.2) 50%,
                        rgba(255, 87, 34, 0) 100%
                    );
                }

                .dark-container .gap-3, .literal-container .gap-3 {
                    gap: 0.75rem;
                }

                .literal-container {
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 
                        0 8px 32px 0 rgba(0, 0, 0, 0.37),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    padding: 2rem;
                    border-radius: 1rem;
                    margin: 1rem;
                }

                .literal-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(255, 255, 255, 0.05) 0%,
                        rgba(255, 255, 255, 0.02) 100%
                    );
                    z-index: 1;
                }

                .literal-container::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(
                        circle at 50% 50%,
                        rgba(255, 87, 34, 0.1) 0%,
                        rgba(0, 0, 0, 0) 70%
                    );
                    z-index: 2;
                }

                .literal-container:hover {
                    background: rgba(0, 0, 0, 0.8);
                    border-color: rgba(255, 255, 255, 0.2);
                    box-shadow: 
                        0 8px 32px 0 rgba(0, 0, 0, 0.5),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.1);
                }

                .literal-container h1 {
                    position: relative;
                    padding-bottom: 10px;
                    color: rgba(255, 255, 255, 0.95);
                    text-shadow: 0 0 10px rgba(255, 87, 34, 0.3);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    margin-bottom: 1.5rem;
                    z-index: 3;
                }

                .literal-container .pl-5 {
                    padding-left: 1.5rem;
                    border-left: 1px solid rgba(255, 255, 255, 0.1);
                    margin-left: 0.5rem;
                    z-index: 3;
                }

                .literal-container p {
                    color: rgba(200, 200, 200, 0.9);
                    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                    margin: 0.75rem 0;
                    padding-left: 0.5rem;
                    z-index: 3;
                }

                .literal-container .text-orange-500 {
                    color: rgba(255, 87, 34, 0.8);
                    text-shadow: 0 0 8px rgba(255, 87, 34, 0.4);
                    margin-right: 0.5rem;
                    z-index: 3;
                }

                .literal-container .flex {
                    margin: 1rem 0;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    z-index: 3;
                }

                .literal-container .flex:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </motion.div>
    )
}

export default Rules