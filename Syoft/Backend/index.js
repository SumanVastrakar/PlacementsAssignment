// username = SumanVastrakar
// password = syoft

import express from "express";
import mongoose from "mongoose";
import cors from "morgan";
import morgan from "morgan";
const port = process.env.PORT ||5000;
import userRouter from "./routes/user.js";


const app = express();

app.use(morgan("dev"));
app.use(express.json({limit : "30mb", extended : true}))
app.use(express.urlencoded({limit : "30mb", extended : true}));
app.use(cors())
app.use("/users", userRouter);  //http://localhost:5000/users/signup
const MONGODB_URL = "mongodb+srv://SumanVastrakar:syoft@cluster0.yujgike.mongodb.net/Syoft?retryWrites=true&w=majority"
//connecting mongodb

app.get("/", (req, res) =>{
    res.send("checking");
    console.log("Listening on port 5000")
})

mongoose.connect(MONGODB_URL).then(() =>{
    app.listen(port, () =>{
        console.log("Listening on port", port)
    })
}).catch((err) => {
    console.log("did not connect", err)
})





