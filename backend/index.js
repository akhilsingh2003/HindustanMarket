const express = require ('express')
const colors=require('colors')
const dotenv=require('dotenv')
const morgan = require('morgan');
const connectDB  = require('./config/db');
const app =express();
const authRoute =require('./routes/authRoute')
const categoryRoute =require('./routes/categoryRoute')
const productRoutes =require('./routes/productRoutes')
const cors =require('cors');


dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));




app.use("/api/v1/auth",authRoute);
app.use("/api/v1/category", categoryRoute)
app.use("/api/v1/product",productRoutes)



app.get("/",(req,res)=>{
     res.send(
        {
            message:"Welocme to Hindustan Market"
        }
     )
})


app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running on ${process.env.PORT}`.bgBlack.cyan);
})