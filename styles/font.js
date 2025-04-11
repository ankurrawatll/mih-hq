import {Pixelify_Sans } from "next/font/google";
import localFont from 'next/font/local'
 

const greatVibes = localFont({ src: './Game-Paused-DEMO.woff' })
const born2b = localFont({ src: './Born2bSportyFS.otf' })

const pixelifySans = Pixelify_Sans({
   variable: "--font-pixelify-sans",
   subsets: ["latin"],
 });

export { greatVibes,pixelifySans,born2b }