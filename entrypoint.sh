#!/bin/sh
set -e

# Run migrations before starting the app
npx drizzle-kit migrate

# Start Next.js
npm run start
