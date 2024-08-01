import React, { useState } from 'react'
import logo from '../assets/hero/logo.svg'

import discord from '../assets/socials/discord.png'
import instagram from '../assets/socials/instagram.png'
import x from '../assets/socials/x.png'
import telegram from '../assets/socials/telegram.png'
import linkedin from '../assets/socials/linkedin.png'
import footerlogo from '../assets/footer/footerlogo.png'
import footerbg from '../assets/footer/footerbg.png'
import footershine from '../assets/footer/footershine.png'

const Footer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        setPosition({ x, y });
    };
    return (
        <>
            {/* <ImageFollower/> */}
            <div onMouseMove={handleMouseMove} className='w-full relative' style={{ backgroundImage: `url(${footerbg})`, backgroundSize: 'cover', objectFit: 'cover', backgroundRepeat: 'no-repeat' }} >
                <img
                    src={logo}
                    alt="Follower"
                    className='md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] xl:w-[50px] xl:h-[50px] 2xl:w-[50px] 2xl:h-[50px] w-0 h-0'
                    style={{
                        position: 'absolute',
                        left: position.x,
                        top: position.y,
                        zIndex:100,
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                    }}
                />
                <div className='bg-gradient-to-b from-[#6600ff] to-black  text-white flex flex-col items-center opacity-90 justify-center py-20'>
                    <div className='w-[80%] flex flex-col items-center text-center'>
                        <h3 className='text-4xl font-filson font-bold m-7'>Join the Community</h3>
                        <p className='text-center tracking-wider font-roboto my-7'>Join us and become a part of a vibrant community where creativity meets innovation. Collaborate, create, and conquer with fellow gamers and developers. Unlock endless possibilities with our AI-powered tools and turn your game ideas into reality. Let’s build the future of gaming together!</p>
                        <div className='flex'>
                            <a href="#"><img className='m-3 h-[30px]' src={discord} /></a>
                            <a href="#"><img className='m-3 h-[30px]' src={telegram} /></a>
                            <a href="#"><img className='m-3 h-[30px]' src={x} /></a>
                            <a href="#"><img className='m-3 h-[30px]' src={instagram} /></a>
                            <a href="#"><img className='m-3 h-[30px]' src={linkedin} /></a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${footershine})`, backgroundSize: 'cover', backgroundPosition: 'center 20px',backgroundRepeat:'no-repeat' }} className='py-[130px] w-full bg-black flex justify-center items-center'>
                    <img className="w-[250px] " src={footerlogo} alt="" />
                </div>
            </div>
        </>
    )
}

export default Footer