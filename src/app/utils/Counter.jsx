"use client"; // Use "use client" for client-side rendering in Next.js

import React, { useState, useEffect } from "react";
import { greatVibes, born2b } from '../../../styles/font'
import { useTimer } from 'react-timer-hook';

const Counter = ({ expiryTimestamp }) => {

    var countDownDate = new Date("May 1, 2025 15:37:25").getTime();

    // Update the count down every 1 second
    setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("day").innerHTML = days
        document.getElementById("hours").innerHTML = hours
        document.getElementById("min").innerHTML = minutes
        document.getElementById("sec").innerHTML = seconds

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);


    return (
        <div className="relative mt-5">
            <div style={{ textAlign: 'center' }}>
                <div className={`${born2b.className} text-5xl lg:text-7xl text-white flex justify-center items-center gap-5`}>
                    <span className=" bg-[url(/bg-nav.avif)] bg-no-repeat bg-center bg-cover rounded-2xl text-center " style={{ filter: 'brightness(0.9)' }}>
                        <p id="day" className="backdrop-blur-sm rounded-2xl p-2 lg:p-4 "></p>
                    </span>

                    <span className=" bg-[url(/bg-nav.avif)] bg-no-repeat bg-center bg-cover  rounded-2xl text-center " style={{ filter: 'brightness(0.9)' }}>
                        <p id="hours" className="backdrop-blur-sm rounded-2xl p-2 lg:p-4"></p>
                    </span>

                    <span className=" bg-[url(/bg-nav.avif)] bg-no-repeat bg-center bg-cover  rounded-2xl text-center " style={{ filter: 'brightness(0.9)' }}>
                        <p id="min" className="backdrop-blur-sm rounded-2xl p-2 lg:p-4"> </p>
                    </span>

                    <span className=" bg-[url(/bg-nav.avif)] bg-no-repeat bg-center bg-cover  rounded-2xl text-center " style={{ filter: 'brightness(0.9)' }}>
                        <p id="sec" className="backdrop-blur-sm rounded-2xl p-2 lg:p-4"> </p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Counter;