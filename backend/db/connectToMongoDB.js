import { mongoose } from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://abhilashbanda7:PrMWloMTNCWOsmzf@cluster0.jdllqsh.mongodb.net/?retryWrites=true&w=majority")
        console.log("connected to mongodb")

    } catch (error) {
        console.log("Error connecting to MongoDB", error.message)
    }
}


export default connectToMongoDB