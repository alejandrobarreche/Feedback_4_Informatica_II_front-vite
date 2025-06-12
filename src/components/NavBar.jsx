import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const navLinkClass = 'block text-gray-700 hover:text-blue-600 p-3 rounded transition duration-200 font-medium'
    const activeClass = 'text-white bg-blue-600 hover:bg-blue-700'

    return (
        <nav className="items-center">
            <div className="p-4 flex items-center justify-between">
                <h1 className="text-md md:text-xl font-bold text-blue-600">Mi Blog</h1>

                {/* Menú de navegación */}
                <div className={`bg-white flex items-center justify-between`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `${navLinkClass} ${isActive ? activeClass : ''}`}
                    >
                        🏠 Home
                    </NavLink>
                    <NavLink
                        to="/posts"
                        className={({ isActive }) => `${navLinkClass} ${isActive ? activeClass : ''}`}
                    >
                        📄 Posts
                    </NavLink>
                    <NavLink
                        to="/posts/crear"
                        className={({ isActive }) => `${navLinkClass} ${isActive ? activeClass : ''}`}
                    >
                        ➕ Crear Post
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
