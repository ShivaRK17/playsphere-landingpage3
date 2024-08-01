import React from 'react';
import Blob from '../components/Blob';

const WhoAreWe = () => {
    return (
        <div className="flex relative items-center justify-center text-white px-4 font-filson">
            <div className='absolute'>
                <Blob/>
            </div>
            <div className="z-10 tracking-widest lg:w-[40%] xl:w-[40%] 2xl:w-[40%] w-full flex justify-center flex-col mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-filson font-bold mt-6 md:mt-10 lg:mt-12">
                    Who we are
                </h2>
                <div className="text-slate-300 text-base md:text-base lg:text-base 2xl:text-2xl">
                    <div className="my-10 md:mb-10 lg:mb-12">
                        <p className="mb-3 2xl:mb-4 leading-[2em] tracking-[0.1em]">
                            We are redefining the gaming experience with cutting-edge AI and blockchain technology.
                        </p>
                    </div>
                    <div className="my-10 md:mb-10 lg:mb-12">
                    {/* <div className="my-6 md:mb-10 lg:mb-12"> */}
                        <p className="mb-3 2xl:mb-4 leading-[2em] tracking-[0.1em]">
                            We empower gamers to create, share, and monetize personalized content while providing developers with powerful tools for innovation.
                        </p>
                    </div>
                    <div className="my-10 md:mb-10 lg:mb-12">
                        <p className="mb-3 2xl:mb-4 leading-[2em] tracking-[0.1em]">
                            Join us in revolutionizing the world
                            gaming and unlocking endless possibilities!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoAreWe;
