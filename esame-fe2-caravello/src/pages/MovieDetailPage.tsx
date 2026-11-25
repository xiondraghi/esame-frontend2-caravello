import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { MovieDetail } from "../types/types";
import Poster from "../components/Poster";
import MovieInfo from "../components/MovieInfo";

function MovieDetailPage () {
    const { id } = useParams();
    const [movie, setMovie] = useState<MovieDetail | null>(null);

    useEffect(() => {
        if (!id) {
            return;
        }

        const apiKey = import.meta.env.VITE_API_KEY;
        const url =
            "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + apiKey;

        fetch(url)
            .then((res) => res.json())
            .then((data: MovieDetail) => {
                setMovie(data);
            });
    }, [id]);
    return (
        <div>
            <Link className="back-link" to="/">
                ← Torna all’elenco
            </Link>

            {movie ? (
                <article className="detail">
                    <div>
                        <Poster
                            posterPath={movie.poster_path}
                            title={movie.title}
                            className="detail__poster"
                        />
                    </div>

                    <MovieInfo movie={movie} />
                </article>
            ) : (
                <p>Caricamento...</p>
            )}
        </div>
    );
}

export default MovieDetailPage;