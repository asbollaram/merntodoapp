const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    todom : {
       type : String,
       required : true 
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('TaskSchema',TaskSchema);