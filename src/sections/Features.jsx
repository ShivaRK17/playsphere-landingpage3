import React from 'react'
import feature1 from '../assets/features/feature1.png'
import feature2 from '../assets/features/feature2.png'
import feature3 from '../assets/features/feature3.png'
import feature4 from '../assets/features/feature4.png'
import feature11 from '../assets/features/feature11.png'
import feature12 from '../assets/features/feature12.png'
import feature13 from '../assets/features/feature13.png'
import feature21 from '../assets/features/feature21.png'
import feature22 from '../assets/features/feature22.png'
import feature31 from '../assets/features/feature31.png'
import feature32 from '../assets/features/feature32.png'
import feature33 from '../assets/features/feature33.png'
import feature41 from '../assets/features/feature41.svg'
import feature42 from '../assets/features/feature42.png'
import feature43 from '../assets/features/feature43.png'
import featurebg1 from '../assets/features/featurebg1.png'
import featurebg2 from '../assets/features/featurebg2.png'
import './features.css'
const Features = () => {
    return (
        <div className='w-full z-10 bg-black flex justify-center relative'>
            <img src={featurebg1} alt="" className='absolute right-0 top-0 object-cover h-[70%]' />
            <img src={featurebg2} alt="" className='absolute right-0 bottom-0 z-1 object-cover w-full' />
            <div className="w-[85%] 2xl:w-[85%] bg-black text-white flex flex-col w-full">
                <h1 className='text-4xl my-5 font-bold font-filson tracking-widest'>FEATURES</h1>
                <div className="my-10 z-10 flex items-center justify-between border-[1px] border-slate-400 rounded-[10px] bg-gray-900 bg-opacity-75 font-roboto flex-col md:flex-row items-center justify-between">
                    <img src={feature1} alt="Magic Wand" className="rounded-[10px] w-full h-full md:w-[45%] opacity-90" />
                    <div className="text-center flex flex-col justify-center md:text-left md:flex-1 p-8">
                        <h2 className="text-2xl font-filson font-bold mb-4">AI-POWERED CREATION TOOLS</h2>
                        <p className="mb-4 tracking-wide text-lg font-filson text-slate-200">Transform ideas into game-ready assets effortlessly with our advanced AI technology.</p>
                        <div className="flex w-full flex-wrap text-center justify-evenly items-center my-10">
                            <div style={{ '--bg': '#6600FF' }} className="smallicons flex flex-col items-center w-[150px] p-2 rounded">
                                <img src={feature11} className="fas fa-magic text-purple-500 my-2 text-white" />
                                <span className='text-sm'>Text-to-asset generation</span>
                            </div>
                            <div style={{ '--bg': '#00FFAB' }} className="smallicons flex flex-col items-center w-[150px] p-2 rounded">
                                <img src={feature12} className="fas fa-magic text-purple-500 my-2" />
                                <span className='text-sm'>Style transfer and customization</span>
                            </div>
                            <div style={{ '--bg': '#E5E900' }} className="smallicons flex flex-col items-center w-[150px] p-2 rounded">
                                <img src={feature13} className="fas fa-magic text-purple-500 my-2" />
                                <span className='text-sm'>Human directed editing interface</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full md:flex-row flex-col z-10'>
                    <div className="md:w-1/2 m-2 w-full my-10 flex items-center justify-between border-[1px] border-slate-400 rounded-[10px] bg-gray-900 bg-opacity-75 font-roboto flex-col items-center justify-between">
                        <img src={feature2} alt="Magic Wand" className="w-[60%] m-10 opacity-90" />
                        <div className="text-center flex flex-col justify-center md:text-left md:flex-1 p-8">
                            <h2 className="text-2xl font-bold font-filson mb-4">CROSS-GAME COMPATIBILITY </h2>
                            <p className="mb-4 tracking-wide text-lg font-filson text-slate-200">Use created assets across multiple supported games seamlessly. </p>
                            <div className="flex flex-wrap w-full text-center justify-evenly items-center ">
                                <div style={{ '--bg': '#6600FF' }} className="smallicons flex w-full md:w-1/3 justify-center items-center p-2 rounded">
                                    <img src={feature21} className="fas fa-magic text-purple-500 m-2" />
                                    <span className='text-sm'>Real-time asset validation</span>
                                </div>
                                <div style={{ '--bg': '#00FFAB' }} className="smallicons flex w-full md:w-1/3 justify-center items-center p-2 rounded">
                                    <img src={feature22} className="fas fa-magic text-purple-500 m-2" />
                                    <span className='text-sm'>Standardized asset format</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 m-2 w-full my-10 flex z-10 flex-col-reverse items-center justify-between border-[1px] border-slate-400 rounded-[10px] bg-gray-900 bg-opacity-75 font-roboto items-center justify-between">
                        <img src={feature3} alt="Magic Wand" className=" w-[60%] opacity-90 m-5" />
                        <div className="text-center flex flex-col justify-center md:text-left md:flex-1 p-8">
                            <h2 className="text-2xl font-bold font-filson mb-4">COMMUNITY FEATURES</h2>
                            <p className="mb-4 tracking-wide font-filson text-lg text-slate-200">Connect, collaborate, and share with fellow creators in our vibrant ecosystem. </p>
                            <div className="flex w-full flex-wrap text-center justify-between items-center ">
                                <div style={{ '--bg': '#6600FF' }} className="smallicons flex w-full md:w-1/3 justify-center items-center p-2 rounded">
                                    <img src={feature31} className="fas fa-magic text-purple-500 m-2 text-white" />
                                    <span className='text-sm'>Creator forums</span>
                                </div>
                                <div style={{ '--bg': '#E5E900' }} className="smallicons flex w-full md:w-1/3 justify-center items-center p-2 rounded">
                                    <img src={feature32} className="fas fa-magic text-purple-500 m-2" />
                                    <span className='text-sm'>Collaborative projects</span>
                                </div>
                                <div style={{ '--bg': '#00FFAB' }} className="smallicons flex w-full md:w-1/3 justify-center items-center p-2 rounded">
                                    <img src={feature33} className="fas fa-magic text-purple-500 m-2" />
                                    <span className='text-sm'>Asset showcases</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-10 flex flex-col z-10 items-center justify-between border-[1px] border-slate-400 rounded-[10px]">
                    <div className="bg-gray-900  rounded-lg flex-1 bg-opacity-75 ">
                        <div className="flex font-roboto flex-col md:flex-row-reverse items-center justify-between">
                            <img src={feature4} alt="Magic Wand" className="w-full h-full md:w-[45%] m-10 opacity-90" />
                            <div className="text-center flex flex-col justify-center md:text-left md:flex-1 p-14">
                                <h2 className="text-2xl font-filson font-bold mb-4">GAME DEVELOPER TOOLS</h2>
                                <p className="mb-4 tracking-wide font-filson text-lg text-slate-200">Robust SDK for seamless integration into existing games,
                                    complete with AI-powered moderation</p>
                                <div className="flex w-full flex-wrap text-center justify-evenly items-center my-10">
                                    <div style={{ '--bg': '#00FFAB' }} className="smallicons flex flex-col items-center w-[150px] p-2 rounded">
                                        <img src={feature41} className="fas fa-magic text-purple-500 my-2 text-white" />
                                        <span className='text-sm'>Easy API integration</span>
                                    </div>
                                    <div style={{ '--bg': '#E5E900' }} className="smallicons flex flex-col items-center w-[150px] p-2 rounded">
                                        <img src={feature42} className="fas fa-magic text-purple-500 my-2" />
                                        <span className='text-sm'>Customizable content guidelines</span>
                                    </div>
                                    <div style={{ '--bg': '#6600FF' }} className="smallicons flex flex-col items-center w-[150px] p-2 rounded">
                                        <img src={feature43} className="fas fa-magic text-purple-500 my-2" />
                                        <span className='text-sm'>AI-powered content moderation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;

