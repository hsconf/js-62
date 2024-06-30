import React from "react";
import { film } from "../../types";
import Movies from "../../components/Movies/Movies";

interface Props {
    movies: film[];
}

const MoviesPage: React.FC<Props> = ({ movies }) => {
    const films = movies.filter(film => film.type === "movie");
    console.log(films);
    return (
        <>
           <div className="d-flex gap-3" style={{width: "60%"}}> {
                films.map(movie => (
                    <Movies
                        key={movie.title}
                        title={movie.title}
                        description={movie.description}
                        releaseDate={movie.releaseDate}
                        poster={movie.poster}
                    />
                ))
            } </div>
        </>
    );
};

export default MoviesPage;
