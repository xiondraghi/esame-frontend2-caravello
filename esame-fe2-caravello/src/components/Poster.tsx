import type { PosterProps } from "../types/types";

function Poster({ posterPath, title, className}: PosterProps){
    if (!posterPath){
        return <div className={className}>Poster</div>
    }

    return (
        <div className={className}>
            <img src={"https://image.tmdb.org/t/p/w500" + posterPath} alt={title} />
        </div>
    )
}

export default Poster;