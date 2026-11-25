import { useEffect, useState } from "react";
import type { Movie, MoviesResponse } from "../types/types";
import MovieCard from "../components/MovieCard";

function MovieListPage () {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = "https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=" +
            apiKey;

        fetch (url).then((res) => res.json()) .then ((data: MoviesResponse) => {setMovies(data.results);});

    })

    return (
        <div>
            <h1 className="page-title">The Lord of the Rings</h1>
            <p className="page-sub">
                Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20
                items · senza filtri / paginazione
            </p>

            <div className="movie-grid">
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
} 

export default MovieListPage;