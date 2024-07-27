import React, { useState } from 'react';
import createimg from '../assets/howitworks/create.png'

const HowItWorks = () => {
    const [id, setId] = useState(1);
    const perks = [
        {
            id: 1,
            img: createimg,
            name: "Create",
            tophead: "Instant Asset generation with AI",
            color:'#6400f9',
            desc: "Describe your vision in words. AI instantly generates game-ready assets."
        },
        {
            id: 2,
            img: createimg,
            name: "Deploy",
            tophead: "Mint, List, and Play",
            color:'#00faa8',
            desc: "One click to mint and list your assets. Seamlessly integrate across multiple games."
        },
        {
            id: 3,
            img: createimg,
            name: "Monetize",
            color:'#d9dc00',
            tophead: "Monetize your creativity",
            desc: "Earn as players use your creations. Build a portfolio of valuable digital assets."
        }
    ];
    const color = perks.filter((e)=>(e.id===id))[0].color

    return (
        <>
            <div className='px-10 py-20 bg-black text-white'>
                <h2 className='font-bold font-filson text-4xl tracking-wider'>
                    HOW IT WORKS
                </h2>
            </div>
            <div style={{background:`linear-gradient(to bottom, ${color}, black)`}} className={`text-white p-8  min-h-screen flex flex-col md:flex-row justify-around items-center shadow-lg`}>
                <div className="flex-1 flex flex-col md:flex-row items-center mb-8 md:mb-0">
                    <div className="flex flex-row mx-2 space-x-4 md:space-x-2">
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

                            <div key={perk.id} style={{backgroundColor:perk.color}} className={`transition-all duration-300 h-[400px] ${id===perk.id?'w-[200px] md:w-[350px]':'w-[60px]'}  mx-1 rounded-lg text-white flex justify-center items-center cursor-pointer`} onClick={() => { setId(perk.id); }}>
                                {id === perk.id ? 
                                <div key={perk.id} className={`relative w-full bg-black rounded-lg h-[400px]`} >
                                    <img className='w-full h-full rounded-lg object-cover' src={perk.img} alt="" />
                                    <div className={`font-filson transition-all duration-3000 overflow-hidden absolute bottom-0 left-0 w-full text-center text-2xl uppercase tracking-wider rounded-lg py-2 font-filson`} style={{backgroundColor:perk.color}}>
                                        {perk.name}
                                    </div>
                                </div>:
                                <div className="-rotate-90 text-2xl font-bold font-filson tracking-wider">
                                    {perk.name.toUpperCase()}
                                </div>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col m-10 justify-center items-center w-[70%] text-center md:text-left p-4 md:p-8 transition-all duration-300">
                    <h2 className="text-3xl font-filson text-center font-bold mb-10 tracking-wider mb-20 ">
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
