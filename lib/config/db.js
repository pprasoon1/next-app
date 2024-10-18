import mongoose from "mongoose"

export const connectDB = async () => {
   await mongoose.connect('mongodb+srv://prasu202324:1234@cluster0.k85yq.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
   console.log("Db connected");
   
}