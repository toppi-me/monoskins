FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM node:22-alpine AS production

WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache tzdata
ENV TZ=Europe/Kyiv

COPY package*.json ./
RUN npm install --omit=dev --ignore-scripts && npm cache clean --force

COPY --from=builder /app/.output ./.output

EXPOSE 3000
ENV HOST=0.0.0.0
CMD ["node", ".output/server/index.mjs"]
