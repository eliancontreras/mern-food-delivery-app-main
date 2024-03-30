import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://reactjs-food-delivery-app').then(()=>{
       console.log('DB connected') ;
    })
}