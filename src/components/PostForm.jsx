import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormularioPost({ initialData = { title: '', content: '' , author: ''}, onSubmit }) {
    const [title, setTitle] = useState(initialData.title);
    const [content, setContent] = useState(initialData.content);
    const [author, setAuthor] = useState(initialData.author);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = 'El título es obligatorio';
        if (title.trim().length < 3) newErrors.title = 'El título debe tener al menos 3 caracteres';
        if (!content.trim()) newErrors.content = 'El contenido es obligatorio';
        if (content.trim().length < 10) newErrors.content = 'El contenido debe tener al menos 10 caracteres';
        if (!author.trim()) newErrors.author = 'El autor es obligatorio';
        if (author.trim().length < 3) newErrors.author = 'El autor debe tener al menos 3 caracteres';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        onSubmit({ title: title.trim(), content: content.trim(), author: author.trim() })
            .then(() => {
                navigate('/posts');
            })
            .catch(err => {
                alert('Error al enviar el formulario:' + err.message);
            });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6"
        >
            <h2 className="text-2xl font-bold text-gray-800">Crear nuevo post</h2>

            {/* Campo: Título */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Título
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Escribe el título del post"
                />
                {errors.title && (
                    <p className="text-sm text-red-500 mt-1">{errors.title}</p>
                )}
            </div>

            {/* Campo: Contenido */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contenido
                </label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    rows={6}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                    placeholder="Escribe el contenido aquí..."
                />
                {errors.content && (
                    <p className="text-sm text-red-500 mt-1">{errors.content}</p>
                )}
            </div>

            {/* Campo: Autor */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Autor
                </label>
                <input
                    type="text"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Nombre del autor"
                />
                {errors.author && (
                    <p className="text-sm text-red-500 mt-1">{errors.author}</p>
                )}
            </div>

            {/* Botones */}
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Guardar
                </button>
                <button
                    type="button"
                    onClick={() => navigate('/posts')}
                    className="text-gray-600 hover:text-blue-600 transition underline"
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
}