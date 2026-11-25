type BelongsToCollection = {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
};

type Genre = {
    id: number;
    name: string;
};

type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};

type ProductionCountry = {
    iso_3166_1: string;
    name: string;
};

export type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
};

export type MovieDetail = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: BelongsToCollection | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    softcore: boolean;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type Movie {
    id: number;
    title:string;
    poster_path: string | null;
    release_date: string;
    vote_average: number;
    overview: string;
}

export type MoviesResponse {
    page: number;
    results: Movie[];
}

//------ PROPS ---------

export type MovieCardProps {
    movie: Movie;
}

export type PosterProps {
    posterPath: string | null;
    title: string;
    className: string;
}

export type MovieInfoProps {
    movie: MovieDetail;
}