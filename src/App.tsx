// import { useState } from 'react'
import './App.css'
import Toolbar from "./components/Toolbar/Toolbar";
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home";

const App = () => {
    return (
        <>
            <header>
                <Toolbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </>
    );
};

export default App
