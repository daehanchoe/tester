const express = require('express');
const path = require('path');
const router = require("./routes/router");

const app = express();
const PORT = process.env.PORT || 3000;
app.use("/", router);
app.set('views', __dirname + '/views');
// app.use(express.static(path.join(__dirname, '..', 'public/')));
app.use(express.static(path.join(__dirname, '..', 'build/')));



console.log("start port : " + process.env.PORT)
app.listen(process.env.PORT || 3000);
// app.listen(PORT, () => {
//     console.log(`Check out the app at http://localhost:${PORT}`);
// });