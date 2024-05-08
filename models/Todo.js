import mongoose from "mongoose";


// create schema 
const todoSchema = mongoose.Schema({ 
  name : {
    type : String,
    required : true,
    trim : true
  },
  prority : {
    type : String,
    trim : true
  }, 
  status : {
    type : Boolean,
    default : true
  },
  trash : {
    type : Boolean,
    default : false
  }

},
{
  timestamps : true
});


// export default schema
export default mongoose.models.Todo || mongoose.model("Todo", todoSchema ); 


