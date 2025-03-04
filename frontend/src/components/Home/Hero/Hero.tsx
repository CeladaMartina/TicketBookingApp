import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-8ch)] lg:ps-28 md:ps-16 sm:ps-7 ps-4 mt-[8ch] flex items-center justify-center flex-col hero relative'>
        <div className='flex-1 w-full flex items-stretch justify-between gap-12 pb-10'>
            <div className='w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14'>
                <div className='space-y-5'>
                    <h1 className='text-7xl font-bold text-neutral-50 leading-[1.15]'>
                        Reserve your Movie
                        <span className='text-blue-500 tracking-wider'>Tickets</span>
                        Now
                    </h1>
                    <p className='text-lg font-normal text-neutral-300 line-clamp-3 text-ellipsis'>
                        Find and book your movie tickets with just a few clicks.
                    </p>
                </div>
                <button className='w-fit bg-blue-400 hover:bg-blue-500 text-neutral-50 font-medium py-3 px-6 rounded-md ease-in-out duration-300'>
                    Reserve Seat Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero