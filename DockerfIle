# ---- Base ----
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS deps
RUN npm install

# ---- Build ----
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Production ----
FROM node:18-alpine AS prod
WORKDIR /app

# Copy build output and minimal files
COPY --from=build /app/.output ./.output
COPY --from=build /app/package*.json ./

# Install only production deps
RUN npm install --omit=dev

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
