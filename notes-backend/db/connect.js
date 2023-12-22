
import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config()
const Db = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Db connection established.')
    }catch(error){
        console.log('DB Error: ', error);
    }
}

// module.exports = db;


// const Db= async()=>{

//     try{
// const mongoDb= await mongoose.connect(process.env.MONGO_URL)
// console.log("Db connected")
// return mongoDb
//     }
//     catch(error){
// console.log("Connection error")
//     }
// }
export default Db