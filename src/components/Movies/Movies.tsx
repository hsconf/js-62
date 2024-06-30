import React from "react";

interface Props {
    title: string;
    releaseDate: string;
    description: string;
    poster: string;
}

const Movies: React.FC<Props> = ({title , releaseDate, description, poster}) => {
    return (
        <>
            <div className="card">
                <div className="card-title">{title}</div>
                <img src={poster} alt={title} />
                <div className="card-body">{description}</div>
                <div className="card-footer">
                    <span>Release date: {releaseDate}</span>
                </div>
            </div>
        </>
    );
};

export default Movies;