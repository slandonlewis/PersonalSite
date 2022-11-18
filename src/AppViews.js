import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Home />} />
                    <Route path="about_me" element={<AboutMe />} />
                    <Route path="portfolio" element={<Portfolio />} />
                </Route>
            </Routes >
        </main >
    );
};