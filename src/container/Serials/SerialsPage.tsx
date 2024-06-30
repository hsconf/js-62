import {film} from "../../types";
import React from "react";
import Movies from "../../components/Movies/Movies";

interface Props {
    serials: film[];
}

const SerialsPage: React.FC<Props> = ({serials}) => {
            const items = serials.filter((serial) => serial.type === 'series')
    console.log(items);
    return (
        <>
            <div className="d-flex gap-3" style={{width: "60%"}}> {
                items.map(movie => (
                    <Movies
                        key={movie.title}  // Используйте уникальное поле, такое как title, для ключей
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

export default SerialsPage;