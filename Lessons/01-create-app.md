# Food App

## Übersicht

Dies ist eine E-Commerce-Anwendung mit Authentifizierungs- und Warenkorb-Funktionalitäten, entwickelt mit [Next.js](https://nextjs.org) und TypeScript. Die App ermöglicht Nutzern das Browsen und Kaufen von Produkten.

## Step 1: Initialize the Project

```bash
mkdir food-delivery-api
cd food-delivery-api
npm init -y
code .
```

## Step 2: install dependencies

```bash
npm install express mongoose dotenv cookie-parser morgan
npm install -D typescript ts-node-dev @types/express @types/node @types/cookie-parser @types/morgan
```

## Step 3: Set Up TypeScript

Create tsconfig.json:

```bash
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Step 4: Create Basic Server

Create src/index.ts:

```bash
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Food Delivery API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Step 5: Create .env File

```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/food-delivery
```

## Step 6: Add Scripts to package.json

```bash
"scripts": {
  "start": "node dist/index.js",
  "dev": "ts-node-dev src/index.ts",
  "build": "tsc"
}
```

## Test Iteration 1

```bash
npm run dev
```

Visit http://localhost:5000 - you should see "Food Delivery API"
