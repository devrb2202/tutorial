# ---- Base ----
FROM node:20-alpine AS base
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
FROM node:20-alpine AS prod
WORKDIR /app
COPY --from=build /app/.output ./.output
COPY --from=build /app/package*.json ./
RUN npm install --omit=dev

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
