const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const healthRoutes = require('./routes/healthRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';

const allowAll = process.env.ALLOW_ALL_ORIGINS === 'true';
app.use(allowAll ? cors() : cors({ origin: clientUrl }));
app.use(express.json());

app.get('/', (request, response) => {
  response.json({
    message: 'Hospital Appointment System API',
    status: 'running'
  });
});

app.use('/api/health', healthRoutes);

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).json({ message: 'Server error' });
});

connectDB();

const host = process.env.HOST || '0.0.0.0';
app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
