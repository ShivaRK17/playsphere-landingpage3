import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import image1 from '../assets/partner/image1.png'
import image2 from '../assets/partner/image2.png'
import image3 from '../assets/partner/image3.png'
import imageb1 from '../assets/partner/imageb1.png'
import imageb2 from '../assets/partner/imageb2.png'
import imageb3 from '../assets/partner/imageb3.png'
import partnerbg from '../assets/partner/partnerbg.png'

const Card1 = ({ isFlipped }) => {
    const [flipped, setFlipped] = useState(isFlipped);

    const handleClick = () => {
        setFlipped(!flipped);
    };
    return (
        <div onMouseEnter={handleClick} onMouseLeave={handleClick} className="w-[320px] h-[340px]">
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
                <div key="front">
                    <div
                        className="flex flex-col items-center bg-purple-700 rounded-3xl shadow-lg w-[320px] h-[340px] relative overflow-hidden border-[3px] border-purple-700"
                        style={{ backgroundImage: `url(${image1})`,backgroundSize:'cover' }}
                    >
                        <div className="bg-purple-900 text-center font-semibold py-4 px-4 absolute bottom-0 w-full font-filson">
                            GAME DEVELOPERS
                        </div>
                    </div>
                </div>
                <div key="back" className="">
                    <div className="flex items-center justify-center w-[320px] h-[340px] ">
                        <div style={{ backgroundImage: `url(${imageb1})`,backgroundSize:'cover' }} className="bg-purple-500 text-white p-4 rounded-3xl shadow-lg w-full h-full overflow-hidden border-[3px] border-purple-700">
                            <p className="text-center text-sm font-semibold mb-5 font-filson">
                                Integrate PlaySphere to unlock endless UGC for your game and make you game infinite with AI.
                            </p>
                            <p className="text-center text-sm font-semibold mb-4">Turn your players to creators and :</p>
                            <div className="space-y-5 py-2">
                                <button className="w-full py-2 bg-transparent border border-white rounded-md text-white text-sm px-2 font-filson">
                                    Reduce content creation costs
                                </button>
                                <button className="w-full py-2 bg-transparent border border-white rounded-md text-white text-sm px-2 font-filson">
                                    Boost player engagement
                                </button>
                                <button className="w-full py-2 bg-transparent border border-white rounded-md text-white text-sm px-2 font-filson">
                                    Open new revenue streams
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
};


const Card2 = ({ isFlipped }) => {
    const [flipped, setFlipped] = useState(isFlipped);

    const handleClick = () => {
        setFlipped(!flipped);
    };
    return (
        <div onMouseEnter={handleClick} onMouseLeave={handleClick} className="w-[320px] h-[340px]">
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
                <div key="front">
                    <div
                        className="flex flex-col items-center bg-[#00FFAB] rounded-3xl shadow-lg w-[320px] h-[340px] relative overflow-hidden border-[3px] border-[#00FFAB]"
                        style={{ backgroundImage: `url(${image2})`,backgroundSize:'cover' }}
                    >
                        <div className="bg-[#005B3D] font-filson text-center font-semibold py-4 px-4 absolute bottom-0 w-full">
                            BRANDS & ADVERTISERS
                        </div>
                    </div>
                </div>
                <div key="back" className="">
                    <div className="flex items-center justify-center w-[320px] h-[340px]">
                        <div style={{ backgroundImage: `url(${imageb2})`,backgroundSize:'cover' }} className="bg-[#00FFAB] text-white p-4 rounded-3xl shadow-lg w-full h-full overflow-hidden border-[3px] border-green-700">
                            <p className="text-center text-sm font-semibold mb-5 font-filson">
                                Reach web3 native gamers through the PlaySphere Network with immersive in-game brand activations.
                            </p>

                            <div className="space-y-5 py-2">
                                <button className="w-full py-2 bg-transparent border border-white rounded-md text-white text-sm px-2 font-filson ">
                                    Engage with a highly interactive audience

                                </button>
                                <button className="w-full py-2 bg-transparent border border-white rounded-md text-white text-sm px-2 font-filson">
                                    Create unique, Al-powered branded content

                                </button>
                                <button className="w-full py-2 bg-transparent border border-white rounded-md text-white text-sm px-2 font-filson">
                                    Measure real-time engagerpent metrics LEVEL UP YOUR BRAND
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
};

const Card3 = ({ isFlipped }) => {
    const [flipped, setFlipped] = useState(isFlipped);

    const handleClick = () => {
        setFlipped(!flipped);
    };
    return (
        <div onMouseEnter={handleClick} onMouseLeave={handleClick} className="w-[320px] h-[340px]">
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
                <div key="front">
                    <div
                        className="flex flex-col items-center bg-[#FBFE5D] rounded-3xl shadow-lg w-[320px] h-[340px] relative overflow-hidden border-[3px] border-yellow-200"
                        style={{ backgroundImage: `url(${image3})`,backgroundSize:'cover' }}
                    >
                        <div className="bg-[#686A00] text-center font-semibold py-4 px-4 absolute bottom-0 w-full font-filson">
                            BRANDS & ADVERTISERS
                        </div>
                    </div>
                </div>
                <div key="back" className="">
                    <div className="flex items-center justify-center w-[320px] h-[340px] ">
                        <div style={{ backgroundImage: `url(${imageb3})`,backgroundSize:'cover' }} className="bg-yellow-600 text-white p-4 rounded-3xl shadow-lg w-full h-full overflow-hidden border-[3px] border-yellow-700">
                            <p className="text-center text-sm font-semibold mb-10 font-filson">
                                Amplify your reach with PlaySphere's creator sponsorship program
                            </p>

                            <div className="space-y-5 py-2">
                                <button className="w-full py-2 bg-transparent border border-white rounded-md text-white text-sm px-2 font-filson ">
                                    Exclusive access to Al creation tools
                                </button>
                                <button className="w-full py-2 bg-transparent border border-white rounded-md text-white text-sm px-2 font-filson">
                                    Revenue sharing on promoted content

                                </button>
                                <button className="w-full py-2 bg-transparent border border-white rounded-md text-white text-sm px-2 font-filson">
                                      Cross-game exposure for your brand BOOST YOUR INFLUENCE!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
};



const PartnerWithUs = () => {
    return (
        <div className="text-white pb-[150px] w-full relative">
            <img src={partnerbg} className='absolute w-full bottom-0' alt="" />
            <div className='w-full flex items-center justify-center py-20 text-white'>
                <h2 className='font-bold font-filson text-4xl w-[85%] my-5 tracking-wider'>
                    PARTNER WITH US
                </h2>
            </div>
            <div className="flex flex-col flex-wrap font-filson md:flex-row justify-around items-center space-y-6  md:space-y-0 md:space-x-6 bg-transparent ">
                <Card1 isFlipped={false} />
                <Card2 isFlipped={false} />
                <Card3 isFlipped={false} />


            </div>
        </div>
    );
}

export default PartnerWithUs