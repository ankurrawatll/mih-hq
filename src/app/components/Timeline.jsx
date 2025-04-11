import Image from "next/image";
import React from "react";
import { greatVibes, born2b } from '../../../styles/font'
import { motion } from "framer-motion";

const Timeline = () => {
  const timelineData = [
    {
      date: "31 Mar 25",
      title: "Project Ppt. Submission",
      description: "Ppt. Submission: This round requires teams to submit their project ppt. using the provided template only. Ppt. Template: The official template for the ppt. has been provided in the 'Download Attachments' section on Unstop, you can convert its format from pdf to pptx to start working on it. Teams must adhere to the format while preparing their submission.",
      time: "11:12 PM IST - 24 Apr 25, 12:00 AM IST",
      status: "Live",
      icon: "/flame.png"
    },
    {
      date: "26 Apr 25",
      title: "Round 1 | Online Pitching Round",
      description: "Online Pitch: After submission, all teams will be required to present their project ppt. in an Online Meet with the mentors & the organizing team. Selection for the Offline Finale: Based on the online pitch evaluation, selected teams will be invited for the offline finale.",
      time: "10:00 AM IST - 05:00 PM IST",
      status: "Upcoming",
      icon: "/spartan.png"
    },
    {
      date: "1 May 25",
      title: "Round 2 | Offline Finale",
      description: "Congratulations on making it to the final round of MIND INSTALLERS HACKATHON 3.O! 🎉 Get ready for an intense 30-hour offline hackathon where you'll bring your ideas to life, refine your solutions, and compete with the best minds from across the nation.",
      time: "10:00 AM IST - 02 May 25, 05:00 PM IST",
      status: "Final",
      icon: "/trophy.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[url('/cropbg.jpg')] bg-no-repeat bg-center bg-cover py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-center items-center gap-10 mb-20">
          <div className="rotate-225 hidden lg:block">
            <Image
              src="/flame.png"
              width={100}
              height={100}
              alt="flame"
              className="animate-pulse"
            />
          </div>
          <h1 className={`${born2b.className} text-6xl lg:text-8xl text-center text-white`}>
            Timeline
          </h1>
          <div className="rotate-45 hidden lg:block">
            <Image
              src="/flame.png"
              width={100}
              height={100}
              alt="flame"
              className="animate-pulse"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-red-600"></div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`mb-16 flex justify-center items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-5/12">
                <div className="glass-card p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={item.icon}
                      width={50}
                      height={50}
                      alt={item.title}
                      className="animate-pulse"
                    />
                    <div>
                      <span className={`${born2b.className} text-2xl text-orange-500`}>
                        {item.date}
                      </span>
                      <h2 className={`${born2b.className} text-3xl text-white`}>
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500">{item.time}</span>
                    <span className={`px-4 py-2 rounded-full ${
                      item.status === "Live" ? "bg-green-500" :
                      item.status === "Upcoming" ? "bg-blue-500" :
                      "bg-purple-500"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 87, 34, 0.5);
          box-shadow: 0 8px 32px 0 rgba(255, 87, 34, 0.2);
        }
        @keyframes flame {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-pulse {
          animation: flame 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Timeline;
