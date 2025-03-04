import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  name: string;
  description: string;
  image: string;
  category:string
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resp = await axios.get<Movie[]>("http://localhost:4000/movies");
        console.log(resp.data);
        setMovies(resp.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch] space-y-14">
      {/* Search and Filter */}
      <div className="w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px-6 py-5 items-center justify-between">
        <div className="flex items-center gap-x-2.5 col-span-2">
          <input
            type="number"
            placeholder="Search movies..."
            id="movies"
            name="mvovies"
            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
          />
          <button className="bg-blue-600 h-11 px-4 rounded-md text-base text-neutral-50 font-normal">
            <i className="bx bx-search"></i>
          </button>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-2">
          <select
            name="movies"
            id="movies"
            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
          >
            <option value="">Select Category</option>
            <option value="movie1">Terror</option>
            <option value="movie2">Comedy</option>
            <option value="movie3">Romance</option>
          </select>
        </div>
      </div>

      {/* Movie cards */}
      <div className="w-full grid grid-cols-3 gap-10">
        {movies.map((item) => (
          <Link
            key={item.id}
            to={"/movie/movie-details"}
            className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full aspect-video object-contain object-center"
            />
            <div className="px-3 py-4 space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                  {item.name}
                </h1>
                <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                  {item.category}
                </p>
              </div>
            </div>
          </Link>
        ))}        
      </div>
    </div>
  );
};

export default Movies;
