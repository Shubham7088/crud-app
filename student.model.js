const mongoose =require('mongoose');
const Schema =mongoose.Schema;

 const studentSchema = new Schema({
    // id1:{
    //     type: String,
    //     required:true
    // },
    title: {
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
    dueDate:{
        type:Date,
        required:true
    }
},
{
 collection: 'students'
}  
);

module.exports =mongoose.model('StudentSchema', studentSchema)