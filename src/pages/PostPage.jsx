import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, deletePost } from '../services/postService';
import PostCard from '../components/PostCard.jsx';

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllPosts()
            .then(res => {
                setPosts(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Error al cargar publicaciones');
                setLoading(false);
                console.error(err);
            });
    }, []);

    const handleDelete = (id) => {
        if (!window.confirm('¿Eliminar esta publicación?')) return;
        deletePost(id)
            .then(() => {
                setPosts(prev => prev.filter(p => p.id !== id));
            })
            .catch(() => {
                alert('Error al eliminar la publicación');
            });
    };

    if (loading) return <p className="text-center text-gray-500 mt-10">Cargando publicaciones…</p>;
    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Lista de Publicaciones</h2>
                <Link
                    to="/posts/crear"
                    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    + Nueva Publicación
                </Link>
            </div>

            {posts.length === 0 ? (
                <p className="text-gray-600 text-center">No hay publicaciones.</p>
            ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map(post => (
                        <div key={post.id} className="relative group">
                            <PostCard
                                id={post.id}
                                title={post.title}
                                content={post.content}
                                author={post.author}
                            />
                            {/* Acciones: Editar y Eliminar */}
                            <div className="absolute top-4 right-4 flex gap-2 opacity-50 group-hover:opacity-100 transition">
                                <button
                                    onClick={() => handleDelete(post.id)}
                                    className="text-sm px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
                                >
                                    🗑
                                </button>
                                <Link
                                    to={`/posts/${post.id}/editar`}
                                    className="text-sm px-2 py-1 bg-yellow-100 text-yellow-600 rounded hover:bg-yellow-200"
                                >
                                    ✏️
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
