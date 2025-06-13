# Front-Vite React – Cliente para el BFF de Posts

Este proyecto es un frontend ligero basado en Vite + React + Tailwind CSS que consume tu BFF (Next.js) — a su vez proxy hacia la API de Spring Boot.  
Permite listar, crear, editar y borrar “posts” a través de componentes reutilizables.

---

## ¿Qué hace?

- **HomePage** (`/`)  
  Muestra un “hero” de bienvenida y las 3 últimas publicaciones en tarjetas.

- **PostsPage** (`/posts`)  
  Lista todas las publicaciones con botones para **editar** y **eliminar**, y enlace a **nueva publicación**.

- **CrearPage** (`/posts/crear`)  
  Formulario para crear un post nuevo (título, contenido, autor).

- **DetallePage** (`/posts/:id`)  
  Muestra los datos completos de un post por su ID.

- **EditarPage** (`/posts/:id/editar`)  
  Formulario para modificar un post existente.

- **Servicios** (`src/services/postService.js`)  
  Funciones `getAllPosts`, `getPostById`, `createPost`, `updatePost`, `deletePost` usando Axios apuntando al BFF.

---

## Requisitos

- Node.js ≥ 16
- npm o yarn
- Tu BFF corriendo (por defecto en `http://localhost:3000/api`)

---

## Variables de entorno

Crea un fichero `.env.local` en la raíz con:

```bash
# URL base de tu API de Spring Boot (sin /posts)
VITE_API_URL=http://localhost:3000/api
VITE_PORT=3001
```

## Instalación

1. Instala dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```