
import dotenv from "dotenv"
import express from "express";
import Db from "./db/connect.js"
import cors from "cors";
import router from "./routes/Notes.routes.js"

dotenv.config()
//import routes


const app = express();

//Connecting DB
Db();




app.get('/', (req, res) => {
    res.send('Welcome to NRK notes');
})

//Middlewares
app.use(express.json());
app.use(cors());

app.use(router);


const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});
