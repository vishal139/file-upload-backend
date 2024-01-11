import express, { json } from 'express';
import UserRoutes from './routes/user.routes.js';
import dotenv from 'dotenv';
dotenv.config()
import connectDB from './config/db.js';
import cors from 'cors'
const PORT = process.env.PORT || 8000;

connectDB();

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static('uploads'));

app.use('/user', UserRoutes);


app.listen(PORT, () => {
  console.log(`application is running on port ${PORT}`);
});