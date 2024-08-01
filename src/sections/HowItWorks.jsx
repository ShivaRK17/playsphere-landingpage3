import React, { useState } from 'react';
import createimg from '../assets/howitworks/create.png'
import create from '../assets/howitworks/creat.png'
import deploy from '../assets/howitworks/deploy.png'
import monetize from '../assets/howitworks/monetize.png'

const HowItWorks = () => {
    const [id, setId] = useState(1);
    const perks = [
        {
            id: 1,
            img: create,
            name: "Create",
            tophead: "Instant Asset generation with AI",
            color: '#6400f9',
            desc: "Describe your vision in words. AI instantly generates game-ready assets."
        },
        {
            id: 2,
            img: deploy,
            name: "Deploy",
            tophead: "Mint, List, and Play",
            color: '#00faa8',
            desc: "One click to mint and list your assets. Seamlessly integrate across multiple games."
        },
        {
            id: 3,
            img: monetize,
            name: "Monetize",
            color: '#d9dc00',
            tophead: "Monetize your creativity",
            desc: "Earn as players use your creations. Build a portfolio of valuable digital assets."
        }
    ];
    const color = perks.filter((e) => (e.id === id))[0].color

    return (
        <>
            <div className='w-full flex items-center justify-center py-20 bg-black text-white'>
                <h2 className='font-bold font-filson text-4xl w-[85%] my-5 tracking-wider'>
                    HOW IT WORKS
                </h2>
            </div>
            <div style={{ background: `linear-gradient(to bottom, ${color}, black)` }} className={`text-white  min-h-screen flex flex-col md:flex-nowrap flex-wrap md:flex-row items-center shadow-lg`}>
                <div className="w-full lg:w-[60%] md:w-[60%] xl:w-[60%] 2xl:w-[60%] my-10 flex flex-col md:flex-row items-center justify-center mb-8 md:mb-0">
                    <div className="w-full flex flex-row justify-center ">
                        {/* {perks.map((perk) => (
                            id === perk.id ? (
                                <div key={perk.id} className="bg-black rounded-lg w-[250px] h-[400px]" style={{ backgroundImage: `url(${perk.img})` }}>
                                </div>
                            ) : (
                                <div key={perk.id} className="bg-black h-[400px] w-[70px] mx-1 rounded-lg text-white flex justify-center items-center cursor-pointer" onClick={() => { setId(perk.id); }}>
                                    <div className="-rotate-90 text-2xl font-bold">
                                        {perk.name.toUpperCase()}
                                    </div>
                                </div>
                            )
                        ))} */}
                        {perks.map((perk) => (

                            <div key={perk.id} style={{ backgroundColor: perk.color }} className={`transition-all duration-300 h-[400px] ${id === perk.id ? 'w-[300px] md:w-[320px]' : 'w-[40px] md:w-[60px] lg:w-[60px] xl:w-[60px] 2xl:w-[60px]'}  mx-1 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 rounded-lg text-white flex justify-center items-center cursor-pointer`} onClick={() => { setId(perk.id); }}>
                                {id === perk.id ?
                                    <div key={perk.id} className={`relative flex flex-col w-full bg-black rounded-lg h-[400px]`} >
                                        <img className='h-full rounded-t-lg object-cover ' src={perk.img} alt="" />
                                        <div className={`font-filson absolute transition-all duration-3000 overflow-hidden bottom-0 left-0 w-full text-center text-2xl uppercase tracking-wider rounded-b-lg py-2 font-filson `} style={{ backgroundColor: perk.color }}>
                                            {perk.name}
                                        </div>
                                    </div> :
                                    <div className="-rotate-90 text-2xl font-bold font-filson tracking-wider">
                                        {perk.name.toUpperCase()}
                                    </div>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[90%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]  text-center md:text-left p-4 md:p-8 transition-all duration-300">
                    <h2 className="text-3xl 2xl:text-4xl font-filson text-center font-bold mb-10 tracking-wider mb-20 ">
                        {perks.find(perk => perk.id === id).tophead}
                    </h2>
                    <p className="text-xl font-filson text-center tracking-widest tracking-wider">
                        {perks.find(perk => perk.id === id).desc}
                    </p>
                </div>
            </div>
        </>
    );
};

export default HowItWorks;
