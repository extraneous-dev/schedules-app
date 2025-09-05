# Stage 1: Builder
FROM node:20-alpine AS builder

# Install dependencies for build (bash, openssl for drizzle migrations if needed)
RUN apk add --no-cache bash openssl

# Set working dir
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN yarn install --frozen-lockfile

# Copy project files
COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
# Run drizzle migrations (optional, comment out if running migrations separately)
# RUN npx drizzle-kit migrate

# Build Next.js app
RUN DATABASE_URL=${DATABASE_URL} yarn build

# Stage 2: Production runner
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Only copy necessary files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
ENTRYPOINT [ "entrypoint.sh" ]