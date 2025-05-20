import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))


// when a form submitted, the data come here
app.use(express.json({limit: "16kb"}))
// when the data come from URL
app.use(express.urlencoded({extended: true, limit: "16kb"}))
// the static file or assets are access able from public folder
app.use(express.static("public"))
// to access the cookie of user browser and perform the CRUD oparation on cookie
app.use(cookieParser()) 



export { app };
