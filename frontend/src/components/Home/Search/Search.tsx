import React from 'react'

const Search = () => {
  return (
    <div  className='w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]'>
        <div className='w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8'>
            <div className="grid grid-cols-4 gap-x-10 gap-y-12 items-end">
                <div className=''>
                    <label htmlFor='movies' className='block mb-2 font-semibold'>
                        Movies
                    </label>
                    <select name='movies' id='movies' className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'>
                        <option value=''>Select  Location</option>
                        <option value='movie1'>Capitan America</option>
                        <option value='movie2'>Moana 2</option>
                        <option value='movie3'>Mufasa: El rey Leon</option>
                    </select>
                </div>
                <div className=''>
                    <label htmlFor='date' className='block mb-2 font-semibold'>
                        Choose Date
                    </label>
                    <input type='date' id='date' name='date' className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'>
                    </input>
                </div>
                <div className=''>
                    <label htmlFor='time' className='block mb-2 font-semibold'>
                        Choose Time
                    </label>
                    <input type='time' id='time' name='time' className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'>
                    </input>
                </div>
                <div className=''>
                    <button className="w-full px-4 h-12 bg-blue-800 text-neutral-50 text-base font-normal rounded-md">
                        Chek Availabitily
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search