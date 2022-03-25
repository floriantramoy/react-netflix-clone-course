/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Film_details from './pages/Film_details/Film_details';
import Film_list from "./pages/Film_list/Film_list";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import New_profil from './pages/New_profil/New_profil';
import Update_profil from "./pages/Update_profil/Update_profil";
import Whos_watching from "./pages/Whos_watching/Whos_watching";
import Layout from "./pages/Layout/Layout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="account" element={<Whos_watching />} />
                    <Route path="update" element={<Update_profil />} />
                    <Route path="newProfil" element={<New_profil />} />
                    <Route path="details" element={<Film_details />} />
                    <Route path="list" element={<Film_list />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
