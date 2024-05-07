
import mongoose from "mongoose";

// create mongodb connection 

const mongodbConnect = async() => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected Successfull`);
    
  } catch (error) {
    console.log(`Mongodb Connection Failed`);
  }
}


// export default connection 
export default mongodbConnect; 



