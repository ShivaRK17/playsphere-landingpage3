import React from 'react'

const News = (() => {
    return <div className=' bg-[#0F0F0F] ' >
        <div class="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-purple-900 to-black">
            <div class=" w-full  p-8 bg-black border border-gray-800 rounded-lg shadow-lg">
                <h1 class="text-3xl font-semibold track-wider text-center text-[#00FFAB] font-filson mt-16">Sign up for the official PlaySphere Newsletter!</h1>
                <p class="mt-4 text-lg text-center text-gray-400 font-filson">
                    Don't miss out on the latest in game creation and innovation. Sign up now and become a part of the PlaySphere revolution!
                </p>
                <div class="flex items-center md:flex-row flex-col justify-center mt-16">
                    <input type="email" placeholder="Enter your email address" class="md:w-[40%] w-[80%] p-2 m-2 text-white bg-black border-b-2 border-white focus:outline-none focus:border-white placeholder-white" />
                    <button className="px-10 my-10 mx-2 py-2 hover:bg-[#E5E900] hover:text-black bg-[#0F0F0F] border-[2px] border-[#E5E900] text-[#E5E900] text-lg font-bold rounded-full ">
                        Discover
                    </button>
                </div>
            </div>
        </div>

    </div>
})
export default News;