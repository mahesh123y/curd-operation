const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/crud").then(() => {
    console.log("connection is successful");
}).catch((e)=> {
    console.log("Not connection");
});