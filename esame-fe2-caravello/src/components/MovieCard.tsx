import { Link } from "react-router";
import type { MovieCardProps } from "../types/types";
import Poster from "./Poster";

function MovieCard ({ movie }: MovieCardProps) {
    return (
        <article className="card">
            <Poster posterPath={movie.poster_path} title={movie.title} className="card__poster" />
            <div className="card__body">
                <h2 className="card__title">{movie.title}</h2>
                <p className="card__meta">
                    Uscita: {movie.release_date} Voto: {movie.vote_average}
                </p>
                <p className="card__overview">{movie.overview}</p>
                <Link className="card__cta" to={`/movies/${movie.id}`}> Dettaglio
                </Link>
            </div>
        </article>
    )
}

export default MovieCard;