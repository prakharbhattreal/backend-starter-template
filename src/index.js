// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
// import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
    // path: './.env'
});

// connectDB()   // if have
// .then(()=>{
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
})
// })
// .catch((err)=>{
//     console.log("MONGO db conn failed !!");
// })