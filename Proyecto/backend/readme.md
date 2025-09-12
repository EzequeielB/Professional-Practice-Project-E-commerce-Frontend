# Proyecto Tienda Online

### Descripción
Este proyecto tiene como objetivo crear una plataforma de venta online 24/7 para una tienda física, mejorando su visibilidad y eficiencia. La plataforma permitirá gestionar el inventario, proveedores, ventas y reservas, además de ofrecer funcionalidades como carrito de compras, lista de deseos y newsletter para mejorar la experiencia del cliente y competir con otras tiendas en el mercado virtual.

## Tecnologías Utilizadas

Este proyecto está construido utilizando las siguientes tecnologías:

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com)

## Instalación

```
cd carpeta-del-proyecto
```

```
npm install
```

```
npm run dev
```

## Estructura del Proyecto (Frontend)
### Arquitectura basada en funcionalidades

```
src/
├── features/                 # carpeta principal que agrupa funcionalidades por caracteristicas
│   ├── cart/                 # Funcionalidad ej: carrito de compras
│   │   └── Cart.tsx          # Componente de carrito
│   │   └── CartItem.tsx      # Componente de un item dentro del carrito
│   │   └── CartSlice.ts      # Estado de Redux para el carrito
│   │   └── cartAPI.ts        # Funciones para interacturar con el API para el carrito
│   │
│   ├── user/                 # Funcionalidad de gestión de usuario
│   │   └── UserProfile.tsx   # Componente para mostrar el perfil de usuario
│   │   └── UserSlice.ts      # Estado de Redux relacionado al usuario
│   │   └── userService.ts    # Funciones para manejar datos de usuarios
│   │
├── shared/                   # Carpeta para elementos compartidos entre funcionalidades
│   │   └── components/       # Componente reutilizables (como un botón global)
│   │   └── hooks/            # Hooks  compartidos entre funcionalidades
│   │   └── utils/            # Funcionaes utilitarias compartidas
│   │
├── stored/                   # Estado global general para la app
        └── index.ts          # Configuración del store global
```

## Estructura del Proyecto (Backend)
### Clean Architecture

#### Pasos para ejecutar el backend
1 - Instalar las dependencias
```
npm install
```
2 - Crear las migraciones
```
npx prisma generate
```
3 - Compilar el código
```
npm run build
```
4 - Ejecutar el contenedor de Docker (abrir cmd en la misma "altura" del archivo docker-compose)
```
docker-compose up --build
```
```
src/
├── application
│   ├── usecases
│   │   └── UserCreator
│   │       └── index.ts              # Caso de uso para crear un usuario, maneja la lógica de negocio específica.
│   └── services
│       └── TokenService.ts           # Servicio que gestiona la lógica.
├── domain
│   ├── entities
│   │   └── User.ts                   # Entidad que representa a un usuario con sus propiedades y métodos.
│   ├── exceptions
│   │   └── UserNotFoundError.ts      # Excepción personalizada lanzada cuando no se encuentra un usuario.
│   ├── repositories
│   │   └── UserRepository.ts         # Interfaz que define las operaciones necesarias para interactuar con los usuarios.
├── infrastructure
│   ├── driven-adapters
│   │   └── UserRepositoryAdapter.ts  # Adaptador para interactuar con la base de datos o almacenamiento de usuarios.
│   ├── driving-adapters
│   │   └── api-rest
│   │       └── UserController.ts     # Controlador que maneja las solicitudes HTTP de la API para gestionar usuarios.
│   └── implementations
│       └── userRepository.ts         # Implementación concreta del repositorio de usuarios (por ejemplo, acceso a base de datos).
```

## Equipo

- [Juan Revinski](https://github.com/RevJuanma) - Profesor a cargo
---
- [Mereles Lautaro](https://github.com/MerelesLautaro) - Desarrollador
- [Ezequiel Beuter](https://github.com/EzequeielB) - Desarrollador

## Enlaces

- [Documentación](https://drive.google.com/drive/folders/1nAwyldjev5PDrSPfEVHCpEcs_ytaP3T1?usp=sharing)



