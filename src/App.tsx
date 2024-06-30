// import { useState } from 'react'
import './App.css'
import Toolbar from "./components/Toolbar/Toolbar";
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home";
import MoviesPage from "./container/Movies/MoviesPage";
import SerialsPage from "./container/Serials/SerialsPage";

const App = () => {
    return (
        <>
            <header>
                <Toolbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/serials" element={<SerialsPage />} />
                </Routes>
            </main>
        </>
    );
};

export default App
