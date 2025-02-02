import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
// import { config } from "dotenv";
// config()
const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true

}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static('public'))
app.use(cookieParser())
//rout import
import userRouter from '../src/routes/user.rout.js' 

//rout decalare

app.use("/api/v1/users",userRouter)


export {app}