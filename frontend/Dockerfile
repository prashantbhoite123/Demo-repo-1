# ---------------------- Stage 1: Build ----------------------
    FROM node:18-alpine AS builder

    WORKDIR /app
    
    # Accept build-time ARG
    ARG NEXT_PUBLIC_API_URL
    ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
    
    # Install dependencies
    COPY package*.json ./
    RUN npm ci
    
    # Copy source code
    COPY . .
    
    # Build the Next.js app
    RUN npm run build
    
    # ---------------------- Stage 2: Production ----------------------
    FROM node:18-alpine AS runner
    
    WORKDIR /app
    
    # Create a non-root user
    RUN addgroup --system --gid 1001 nodejs && \
        adduser --system --uid 1001 nextjs
    
    # Copy build output
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/.next/standalone ./
    COPY --from=builder /app/.next/static ./.next/static
    
    # Switch to non-root user
    USER nextjs
    
    # Set environment variables
    ENV PORT=3000
    ENV HOSTNAME="0.0.0.0"
    
    # Expose the app port
    EXPOSE 3000
    
    # Start the standalone server
    CMD ["node", "server.js"]
    