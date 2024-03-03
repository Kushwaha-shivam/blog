const express = require("express");
// const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const connectToDB = require("./database/dbconnection");
const userRouter = require("./routes/user.routes.js");
const blogRouter = require("./routes/blog.routes.js");
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})
connectToDB();