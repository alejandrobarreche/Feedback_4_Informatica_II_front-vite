import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import { getAllPosts } from '../services/postService'

export default function HomePage() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getAllPosts()
            .then(res => {
                setPosts(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.error('Error al cargar las publicaciones:', err)
                setError('No se pudieron cargar las publicaciones. Intenta más tarde.')
                setLoading(false)
            })
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Header */}
            <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">¡Bienvenido a Mi Blog! 📝</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Explora nuestras publicaciones, ideas creativas, consejos útiles y mucho más.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-semibold mb-8 text-center">Últimas publicaciones</h2>

                {loading && (
                    <div className="text-center text-blue-600 text-lg font-medium">Cargando publicaciones...</div>
                )}

                {error && (
                    <div className="text-center text-red-500 font-semibold">{error}</div>
                )}

                {!loading && !error && posts.length === 0 && (
                    <div className="text-center text-gray-500">No hay publicaciones disponibles.</div>
                )}

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.slice(0,3).map(post => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

