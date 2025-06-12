
import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import PostsPage from "./pages/PostPage.jsx";
import CrearPage from "./pages/CreationPage.jsx";
import DetallePage from "./pages/DetailPage.jsx";
import EditarPage from "./pages/EditPage.jsx";
import Navbar from "./components/NavBar.jsx";


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="w-full p-6">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/posts/crear" element={<CrearPage />} />
                    <Route path="/posts/:id" element={<DetallePage />} />
                    <Route path="/posts/:id/editar" element={<EditarPage />} />
                    {/* Si la ruta no coincide, redirige a / */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App
