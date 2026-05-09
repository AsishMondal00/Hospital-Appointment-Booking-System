# Hospital Appointment System

A MERN starter for a hospital appointment system.

## Structure

- `server/` - Express API and MongoDB connection
- `client/` - Vite + React frontend

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment files:

- `server/.env`

```bash
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/hospital_appointment_system
CLIENT_URL=http://localhost:5173
```

3. Start both apps:

```bash
npm run dev
```

## Scripts

- `npm run dev` - start client and server together
- `npm run dev:server` - start only the backend
- `npm run dev:client` - start only the frontend
- `npm run build` - build the frontend
- `npm run start` - start the backend in production mode
