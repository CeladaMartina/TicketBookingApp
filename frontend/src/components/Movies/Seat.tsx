import React, { useState } from 'react'

type SeatProps = {
    seatNumber: number;  // Explicitly define `seatNumber` as a number
    isSelected: boolean; // `isSelected` must be a boolean
    onClick: () => void; // `onClick` must be a function
  };

const Seat = ({seatNumber, isSelected, onClick}: SeatProps) => {
  return (
    <i className={`bx bx-chair text-3xl cursor-pointer ${isSelected ? 'text-blue-800' : 'text-neutral-600' }`} onClick={onClick}></i>
  )
}

const MovieSeatLayout = () => {
    
    const totalSeats = 41;
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

    const handleSeatClick = (seatNumber : number) =>{
        if(selectedSeats.includes(seatNumber)){
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        }else{
            if(selectedSeats.length < 10){
                setSelectedSeats([...selectedSeats, seatNumber]);
            }else{
                alert("you can only select a maximun of 10 seats.");
            }
        }
    }

    const renderSeats = () => {
        let seats = [];
        for(let i = 1; i <= totalSeats; i++){
            seats.push(
                <Seat key={i} seatNumber={i} isSelected={selectedSeats.includes(i)} onClick={() => handleSeatClick(i)}/>
            );
        }
        return seats;
    };
    
    return(
        <div className='space-y-5'>
            <h2 className='text-xl text-neutral-800 dark:text-neutral-100 font-medium'>
                Choose a Seat
            </h2>
            
            <div className='w-full flex justify-between'>
                <div className='flex-1 w-full flex'>
                    <div className='w-full flex-1 flex gap-x-5 items-stretch'>
                        <div className="w-10 h-full border-r-2 border-dashed border-neutral-300 dark:border-neutral-800">
                            {/* pantalla */}
                            <i className='bx bxs-tv text-3xl mt-24 text-black -rotate-90'></i>
                        </div>

                        {/* seat Layout */}
                        <div className='flex flex-col items-center'>
                            <div className='flex-1 space-y-4'>
                                <div className='w-full grid grid-cols-10 gap-x-3'>
                                    {renderSeats().slice(0,10)}
                                </div>
                                <div className='w-full grid grid-cols-10 gap-x-3'>
                                    {renderSeats().slice(10,20)}
                                </div>
                                <div className='w-full grid grid-cols-10 gap-x-3'>
                                    {renderSeats().slice(20,21)}
                                </div>
                                <div className='w-full grid grid-cols-10 gap-x-3'>
                                    {renderSeats().slice(21,31)}
                                </div>
                                <div className='w-full grid grid-cols-10 gap-x-3'>
                                    {renderSeats().slice(31,41)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* instruction and information */}
                <div className='space-y-3 w-28'>
                    <div className='flex items-center gap-x-2'>
                        <i className='bx bx-chair text-lg text-neutral-500'></i>
                        <p className='text-neutral-900 text-sm font-normal'>
                            Available
                        </p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <i className='bx bx-chair text-lg text-red-500'></i>
                        <p className='text-neutral-900 text-sm font-normal'>
                            Booked
                        </p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <i className='bx bx-chair text-lg text-blue-800'></i>
                        <p className='text-neutral-900 text-sm font-normal'>
                            Selected
                        </p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <i className='bx bx-money text-lg text-neutal-500'></i>
                        <p className='text-neutral-900 text-sm font-normal'>
                            {/* poner el precio de la peli */}
                            $ 750 
                        </p>  
                    </div>
                </div>
            </div>

            {/* selected seats */}
            {
                selectedSeats.length > 0 &&
                <div className='!mt-10'>
                    <h3 className='text-lg font-bold'>
                        Selected Seats:
                    </h3>
                    <div className="flex flex-wrap">
                        {selectedSeats.map(seat => (
                            <div className='w-10 h-10 rounded-md m-1.5 text-lg font-medium bg-violet-600/30 flex items-center justify-center'>
                                {seat}
                            </div>
                        ))}
                    </div>
                </div>
            }

            {/* calculate price */}
            {
                selectedSeats.length > 0 &&
                <div className='!mt-5 flex items-center gap-x-4'>
                    <h3 className='text-lg font-bold'>
                        Total Prices:
                    </h3>
                    <p className='text-lg font-medium'>
                        {/* poner el * del precio de la pelicula */}
                        $ {selectedSeats.length * 750} 
                    </p>
                    <span className='text-sm text-neutral-600 font-normal'>
                        (Including all of the taxes)
                    </span>
                </div>
            }
        </div>
    );
}


export default MovieSeatLayout