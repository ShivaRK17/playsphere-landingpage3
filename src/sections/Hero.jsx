import React from 'react';
import Roboface1 from '../assets/hero/roboface1.png';
import logo from '../assets/hero/logo.svg';
import bg from '../assets/hero/bg.png';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
        backgroundPosition:'bottom'
      }}
      className="w-full z-10 relative flex flex-col md:flex-row min-h-screen bg-transparent h-screen text-white"
    >
      <div className="text-center z-10 md:text-left md:w-[70%] w-full h-full flex flex-col justify-center md:items-start items-center p-10 md:px-20 lg:px-32 xl:px-40 2xl:px-52">
        <img
          src={logo}
          alt="Logo"
          className="absolute w-[50px] md:w-[70px] 2xl:w-[100px] top-0 left-0 m-5"
        />
        <h1 className="text-3xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl mb-10 text-[#6600FF] font-bungee tracking-[0.2em]">
          PLAYSPHERE <span className="font-roboto font-bold">AI</span>
        </h1>
        <p className="text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl font-semibold">
          <span className="text-white font-filson tracking-[0.2em]">
            AI Powered
          </span>{' '}
          <span className="text-green-400 font-filson font-bold tracking-[0.2em]">
            UGC
          </span>{' '}
          <span className="text-white font-filson tracking-[0.2em]">Layer</span>
        </p>
        <p className="text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl mb-7 tracking-[0.2em]">
          <span className="text-white font-filson">for </span>{' '}
          <span className="text-green-400 font-bold font-filson">WEB3</span>{' '}
          <span className="text-white font-filson"> Games</span>
        </p>
        <p className="text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg mb-1 font-filson  tracking-[0.15em]">
          With PlaySphere AI, anyone can make cool in-game items without
          needing special skills. These items become NFTs that players can use
          or sell.
        </p>
        <p className="text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg font-filson tracking-[0.15em]">
          Your game gets tons of new content, players have more fun, and you
          open up new ways to earn. It's simple, fast, and built for Web3.
        </p>
        <div>
          <button className="2xl:px-12 2xl:py-4 px-10 py-3 tracking-[0.1em] hover:bg-white hover:text-[#6600FF] bg-[#6600FF] text-white text-base md:text-base lg:text-base xl:text-base 2xl:text-lg font-roboto rounded-full mt-10 2xl:mt-14 ">
            Join Waitlist
          </button>
        </div>
      </div>
      <div className="absolute md:opacity-100 opacity-20 h-full right-0">
        <img
          className="h-full object-cover hidden md:flex lg:flex xl:flex 2xl:flex"
          src={Roboface1}
          alt="Futuristic robotic figure"
        />
      </div>
    </div>
  );
};

export default Hero;