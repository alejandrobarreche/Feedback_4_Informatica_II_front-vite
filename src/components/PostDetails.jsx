import {Link} from "react-router-dom";
import React from "react";

export default function DetailView({post: post}) {
    const {id} = post;

    return(
    <>
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                {post.title}
            </h1>
            <p className="text-sm text-gray-500 italic">Por {post.author}</p>
            <hr className="mt-4 border-gray-300" />
        </div>

        {/* Contenido */}
        <article className="prose prose-lg prose-gray max-w-none mb-12">
            <p>{post.content}</p>
        </article>

        {/* Navegación */}
        <div className="flex justify-between text-sm text-blue-600">
            <Link
                to="/posts"
                className="hover:underline hover:text-blue-800 transition"
            >
                🔙 Volver a la lista
            </Link>
            <Link
                to={`/posts/${id}/editar`}
                className="hover:underline hover:text-yellow-600 transition"
            >
                ✏️ Editar esta publicación
            </Link>
        </div>
    </>
    );
}