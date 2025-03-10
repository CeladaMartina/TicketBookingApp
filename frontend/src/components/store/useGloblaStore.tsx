import { create } from "zustand";
import Movie from '../../interfaces/interfaces';

interface MovieStore {
  movies: Movie[];
  fetchMovies: () => Promise<void>;
}


export const useMovieStore = create<MovieStore>((set) => ({
    movies: [],
    
    fetchMovies: async () => {
      try {
        const resp = await fetch("http://localhost:4000/movies/movies");
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        const data: Movie[] = await resp.json();
        set({ movies: data });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
}));
  