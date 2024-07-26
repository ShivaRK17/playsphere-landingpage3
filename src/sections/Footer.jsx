import React from 'react'

import discord from '../assets/socials/discord.png'
import instagram from '../assets/socials/instagram.png'
import x from '../assets/socials/x.png'
import telegram from '../assets/socials/telegram.png'
import linkedin from '../assets/socials/linkedin.png'
import footerlogo from '../assets/footer/footerlogo.png'
import footerbg from '../assets/footer/footerbg.png'
import footershine from '../assets/footer/footershine.png'

const Footer = () => {
    return (
        <>
        <div className='w-full' style={{ backgroundImage: `url(${footerbg})`,backgroundSize:'cover', objectFit: 'cover',backgroundRepeat:'no-repeat' }} >
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
            <div style={{backgroundImage:`url(${footershine})`,backgroundSize:'cover',backgroundPosition:'center'}} className='py-20 bg-black flex justify-center items-center'>
                <img className="w-[250px] " src={footerlogo} alt="" />
            </div>
            </div>
        </>
    )
}

export default Footer