import React from "react";
import { Link, useParams } from "react-router-dom";
import MovieTime from "./MovieTime";
import Seat from "./Seat";
import { useMovieStore } from "../store/useGloblaStore";

const MovieDetails = () => {
  debugger
  const movies = useMovieStore((state) => state.movies);
  const { id } = useParams();

  const movie = movies.find((m) => m.id.toString() === id);

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[10ch]">
      <div className="w-full grid grid-cols-2 gap-16 items-center">
        <div className="col-span-1 space-y-8">
          <img
            src={movie?.image}
            alt="Detail Movie"
            className="w-full aspect-[3/2] rounder-md object-contain"
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-neutral-900">
              {movie?.name}
              <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                {movie?.category}
              </span>
            </h1>
            <p className="text-neutral-900 dark:text-neutral-400 text-sm font-normal">
              {movie?.description}
            </p>
          </div>
        </div>

        {/* seleccionar horario */}
        <div className="col-span-1 space-y-10">
          <div className="space-y-6">
            <MovieTime />
          </div>

          {/* seleccionar asiento */}
          <div className="space-y-6">
            <Seat />
          </div>
          
          {/* checkout boton */}
          <div className="flex">
            <Link
              to={"/movie/details/checkout"}
              className="w-full bg-blue-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-blue-700 ease-in-out duration-300"
            >
              Processed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
