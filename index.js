import express  from  'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan  from 'morgan'
import connectDB   from './config/db'
const app =express();
import authRoute  from './routes/authRoute'
import categoryRoute  from './routes/categoryRoute'
import productRoutes  from './routes/productRoutes'
import cors  from 'cors';
import path from 'path';
import fileURLToPath from 'url'


dotenv.config();
connectDB();
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,"frontend/build")));





app.use("/api/v1/auth",authRoute);
app.use("/api/v1/category", categoryRoute)
app.use("/api/v1/product",productRoutes)



app.get("*",(req,res)=>{
     res.sendFile(path.join(__dirname,"frontend/build/index.html"));
})


app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running on ${process.env.PORT}`.bgBlack.cyan);
})