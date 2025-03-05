import React from 'react'

const MovieDetails = () => {
  return (
    <div  className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[10ch]">
        <div className='w-full grid grid-cols-2 gap-16 items-center'>
            <div className='col-span-1 space-y-8'>
                <img src="" alt="Detail Movie" className="w-full aspect-[3/2] rounder-md object-contain" />
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold text-neutral-900 dark:text-neutral-50'>
                        NOMBRE PELICULA
                        <span className='text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3'>
                            VER QUE PONER
                        </span>
                    </h1>
                    <p className='text-neutral-900 dark:text-neutral-200 text-sm font-normal'>
                        DESCRIPCION
                    </p>
                </div>
            </div>  

            <div className='col-span-1 space-y-10'>
                <div className='space-y-6'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails