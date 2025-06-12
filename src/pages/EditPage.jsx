import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormularioPost from '../components/PostForm';
import { getPostById, updatePost } from '../services/postService';

export default function EditarPage() {
    const { id } = useParams();
    const [initialData, setInitialData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPostById(id)
            .then(res => {
                setInitialData({ title: res.data.title, content: res.data.content, author: res.data.author });
                setLoading(false);
            })
            .catch(err => {
                setError('No se pudo cargar la publicación' + err.message);
                setLoading(false);
            });
    }, [id]);

    const handleUpdate = (data) => {
        return updatePost(id, data);
    };

    if (loading) return <p>Cargando datos del post…</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!initialData) return null; // no debería ocurrir

    return (
        <div>
            <h2>Editar Publicación</h2>
            <FormularioPost initialData={initialData} onSubmit={handleUpdate} />
        </div>
    );
}