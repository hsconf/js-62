// import { useState } from 'react'
import './App.css'
import Toolbar from "./components/Toolbar/Toolbar";
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home";
import MoviesPage from "./container/Movies/MoviesPage";
import SerialsPage from "./container/Serials/SerialsPage";

const App = () => {

    const movies = [
        {
            type: "movie",
            title: "Moana 2",
            releaseDate: "November 27, 2024",
            description: "A sequel to the 2016 animated film Moana, featuring the return of Moana and Maui.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg"
        },
        {
            type: "movie",
            title: "The Crime Is Mine",
            releaseDate: "2023",
            description: "A comedic detective film set in 1930s Paris about a young actress accused of murder.",
            poster: "https://m.media-amazon.com/images/M/MV5BNWI5M2NlM2EtMTE3ZC00ZDUwLWIxZDItNWUxYzVjZjg2YjdiXkEyXkFqcGdeQXVyNDU0NjMyNTQ@._V1_FMjpg_UX1000_.jpg"
        },
        {
            type: "series",
            title: "Shōgun",
            releaseDate: "2024",
            description: "A historical series based on James Clavell's novel, set in 17th century Japan, following a British sailor caught in local political intrigue.",
            poster: "https://m.media-amazon.com/images/I/81FyuFYZjsL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            type: "series",
            title: "The Witcher: Blood Origin",
            releaseDate: "2024",
            description: "A prequel to the popular series The Witcher, set 1200 years before the original series, detailing the creation of the first Witcher and the Conjunction of the Spheres.",
            poster: "https://m.media-amazon.com/images/M/MV5BYWRlODk4ODQtY2VhYy00ZWNhLWIxMTAtMGI1MjE5YWNmMzE3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg"
        },
        {
            type: "series",
            title: "The Bear",
            releaseDate: "2024",
            description: "The third season of a comedy-drama series about a talented chef returning to his hometown to run the family restaurant after his brother's death.",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/The_Bear_2022_FX.png/220px-The_Bear_2022_FX.png"
        }
    ];

    return (
        <>
            <header>
                <Toolbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home movies={movies} />} />
                    <Route path="/movies" element={<MoviesPage movies={movies} />} />
                    <Route path="/serials" element={<SerialsPage serials={movies} />} />
                </Routes>
            </main>
        </>
    );
};

export default App
