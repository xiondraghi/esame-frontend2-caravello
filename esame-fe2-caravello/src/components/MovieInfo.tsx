import type { MovieInfoProps } from "../types/types";

function MovieInfo({ movie }: MovieInfoProps) {
    const productionNames = movie.production_companies
        ? movie.production_companies.map((company) => company.name).join(" · ")
        : "";

    return (
        <div>
            <h1 className="detail__title">
                {movie.title}
            </h1>
            {movie.tagline && <p className="detail__tagline">{movie.tagline}</p>}

            <ul className="detail__meta">
                <li>Uscita: {movie.release_date}</li>
                <li>Durata: {movie.runtime} min</li>
                <li>Voto: {movie.vote_average}</li>
                <li>Voti: {movie.vote_count}</li>
                <li>Stato: {movie.status}</li>
                <li>Lingua: {movie.original_language}</li>
            </ul>

            <div className="detail__genres">
                {movie.genres?.map((genre) => (
                    <span key={genre.id} className="genre">
                        {genre.name}
                    </span>
                ))}
            </div>

            <p className="detail__overview-label">Trama</p>
            <p className="detail__overview">
                {movie.overview}
            </p>

            <p className="card__meta">
                Produzione: {productionNames}
            </p>
        </div>
    )
}

export default MovieInfo;