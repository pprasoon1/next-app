import mongoose from "mongoose"

export const connectDB = async () => {
   await mongoose.connect('mongodb+srv://prasu202324:1234@cluster0.dxjsd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      

    })
   console.log("Db connected");
   
}