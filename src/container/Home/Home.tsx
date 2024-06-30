import Movies from "../../components/Movies/Movies";
import React from "react";
import {film} from "../../types"

interface Props {
    movies: film[];
}

const Home: React.FC<Props> = ({movies}) => {

    return (
        <>
            <div className="d-flex gap-3">
                {movies.map((movie, index) => (
                    <Movies
                        key={index}
                        title={movie.title}
                        description={movie.description}
                        releaseDate={movie.releaseDate}
                        poster={movie.poster}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;