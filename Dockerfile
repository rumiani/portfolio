# ---------------------------
# Base image (common layers)
# ---------------------------
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache g++ make python3 libc6-compat

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install   # installs all deps (needed for builder & dev)

# Copy source code
COPY . .

# ---------------------------
# Builder stage
# ---------------------------
FROM base AS builder
WORKDIR /app
# .next will be built here with all deps
RUN npm run build

# ---------------------------
# Production stage
# ---------------------------
FROM node:20-alpine AS production
WORKDIR /app
RUN apk add --no-cache g++ make python3 libc6-compat

# Copy only prod dependencies
COPY package.json package-lock.json ./
RUN npm ci --production

# Copy build output from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Optional: add non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

EXPOSE 3000
CMD ["npm", "start"]

# ---------------------------
# Dev stage (hot reload)
# ---------------------------
FROM base AS dev
WORKDIR /app
ENV NODE_ENV=development
EXPOSE 3000
CMD ["npm", "run", "dev"]
