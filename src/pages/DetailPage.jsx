import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostById } from '../services/postService';
import DetailView from '../components/PostDetails.jsx';

export default function DetallePage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getPostById(id)
            .then(res => {
                setPost(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError('No se encontró la publicación' + err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p className="text-center text-gray-500 mt-10">Cargando detalle…</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-10">{error}</p>;
    }

    if (!post) return null;

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <DetailView post={post} />
        </div>
    );
}
