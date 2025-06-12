import React from 'react';

export default function PostCard({ id, title, content, author}) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-20">
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h2>
                <p className="text-gray-700 text-base line-clamp-1 mb-4">{content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>By {author}</span>
                </div>
                <a href={`/posts/${id}`} className="text-blue-600 hover:text-blue-800 font-medium inline-block mt-1">
                    Leer más →
                </a>
            </div>
        </div>
    );
}
