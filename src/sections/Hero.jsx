import React from 'react'
import Roboface from '../assets/hero/roboface.png'
import Roboface1 from '../assets/hero/roboface1.png'
import logo from '../assets/hero/logo.svg'
import bg from '../assets/hero/bg.svg'
const Hero = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`,backgroundSize:'cover',backgroundBlendMode:'overlay'}} className="w-full relative flex flex-col md:flex-row min-h-screen h-screen bg-gradient-to-r from-purple-900 via-blue-900 to-green-900 text-white">
      <div className="text-center md:text-left md:w-2/3 w-full h-full flex flex-col justify-center md:items-start items-center p-10 px-20">
        <img src={logo} alt="Logo" className='absolute w-[70px] top-0 left-0 m-5' />
        <h1 className="text-4xl md:text-5xl mb-10 text-[#6600FF] font-bungee tracking-[0.2em]">PLAYSPHERE <span className='font-roboto font-bold'>AI</span></h1>
        <p className="text-2xl font-semibold">
          <span className="text-white font-filson tracking-[0.2em]">AI Powered</span> <span className="text-green-400 font-filson font-bold tracking-[0.2em]">UGC</span> <span className="text-white font-filson tracking-[0.2em]">Layer</span></p>
        <p className="text-2xl mb-7 tracking-[0.2em]">
          <span className="text-white font-filson">for </span> <span className="text-green-400 font-bold font-filson">WEB3</span> <span className="text-white font-filson"> Games</span>

        </p>
        <p className="text-base mb-1 font-filson font-light tracking-[0.15em]">
          With PlaySphere AI, anyone can make cool in-game items without needing special skills. These items become NFTs that players can use or sell.
        </p>
        <p className='text-base font-filson font-thin tracking-[0.15em]'>
          Your game gets tons of new content, players have more fun, and you open up new ways to earn. It's simple, fast, and built for Web3.
        </p>
        <div>
          <button className="px-10 py-2 hover:bg-white hover:text-[#6600FF] bg-[#6600FF] border-white border-[2px] text-white text-lg font-filson rounded-full mt-14 font-semibold">
            Join Waitlist
          </button>
        </div>
      </div>
      <div className="absolute md:opacity-100 opacity-20 h-full right-0">
        <img className='h-full' src={Roboface1} alt="Futuristic robotic figure" />
      </div>
    </div>
  );
};

export default Hero