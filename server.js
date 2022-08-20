const express = require("express");
const mongoose = require("mongoose");
const TaskSchema = require("./model")
const cors = require("cors");

const app = express();

// // body parser import for working on post method
// const bodyparser = require('body-parser');
// /*assuming an express app is declared here*/
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended: true}));

app.use(express.json());

app.use(cors({
    origin: "*"
}))

mongoose.connect('mongodb+srv://mangoTODO:rIJOpcY1E6rTXQNS@cluster0.17hwg.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    console.log("DB conncted...")
)

//

app.post("/addtaskm", async(req, res) =>{
    const {todom} = req.body;
    try{
        const newData = new TaskSchema({
            todom : todom
        });
        await newData.save();
        return res.json(await TaskSchema.find());
    }
    catch(err){
        console.log(err)
    }
})


// get code

app.get("/gettask", async(req, res) =>{
   try{
    return res.json(await  TaskSchema.find());
   }
   catch(err){
    console.log(err)
   }
})

// delete data

app.delete("/delete/:id", async(req, res) =>{
    try{
        await TaskSchema.findByIdAndDelete(req.params.id);
        return res.json(await TaskSchema.find())
    }catch(err){
        console.log(err)
    }
})


app.get("/", (req, res) =>{
    res.send("<h1>Welcome back again</h1>")
})



app.listen(3001, () => console.log("server is runing 3001 ..."));