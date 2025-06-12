import React from 'react';
import FormularioPost from '../components/PostForm';
import { createPost } from '../services/postService';

export default function CrearPage() {
    const handleCreate = (data) => {
        return createPost(data);
    };

    return (
        <div>
            <FormularioPost onSubmit={handleCreate} />
        </div>
    );
}