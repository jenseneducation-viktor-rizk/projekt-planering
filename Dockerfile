#mall
FROM node:lts-alpine

#installerar en webbserver som appen servas på
RUN npm install -g http-server

#arbetsmappen blir '/app'
WORKDIR /app

#kopierar både 'package.json' och 'package-lock.json'
COPY package*.json ./

#installerar projektets dependencies
RUN npm install

#kopierar projektfiler och mappar till nuvarande arbetsmapp
COPY . .

#bygg app för produktion, hamnar i './dist/'
RUN npm run build

#vue lyssnar på port 8080, öppnar den
EXPOSE 8080

#startar http-server och servar mappen dist
CMD [ "http-server", "dist" ]