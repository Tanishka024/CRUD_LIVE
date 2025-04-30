const mongoose =require('mongoose');
async function dbConn(){
    const conn = await mongoose.connect('mongodb+srv://tanishka:root@cluster0.h8ak0ei.mongodb.net/crud_live_aiml?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log("Database connect successfully");
    }
    else{
        console.log("Database not connect");
    }
}
module.exports=dbConn;