
const mongoose = require("mongoose");
try {
    var connectToDB = async() => {
        await mongoose.connect(process.env.MONGO_URL, { dbName: "blogdata" });
        console.log("connected to database successfully");
    }

} catch (err) {
    console.log(err);
}
module.exports = connectToDB;



