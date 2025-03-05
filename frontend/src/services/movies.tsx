import Movie from "../interfaces/interfaces";

export const getMovies = async () => {
  try {
    const resp = await fetch("http://localhost:4000/movies/movies");
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }
    const data: Movie[] = await resp.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
