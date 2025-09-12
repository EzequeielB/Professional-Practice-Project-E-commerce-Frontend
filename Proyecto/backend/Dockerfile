# Etapa 1: Construcción
FROM node:20-alpine AS build

WORKDIR /app

# Copiar package.json y lockfile para instalar dependencias
COPY package*.json ./

RUN npm install

# Copiar todo el código fuente
COPY . .

# RUN ls -l /app/src/docs DEBUG
# Ejecutar prisma generate aquí para generar binarios correctos para Linux Alpine
RUN npx prisma generate

# Compilar TypeScript a JavaScript
RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/src/docs ./docs

EXPOSE 8082

CMD ["node", "dist/index.js"]