
import mongoose from 'mongoose';
//Schema definition
const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        
    },
    subtitle: {
        type: String,
       
    },
    contant: {
        type: String,
        
      
    }
    
});

//Model creation
 const Model = mongoose.model('notes', NotesSchema);
export default Model

//////employees////