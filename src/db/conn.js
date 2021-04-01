const mongoose = require("mongoose");
//creating a database
mongoose.connect("mongodb://localhost:27017/shivankdynamic", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection successful")
}).catch(() => {
    console.log('error');
})