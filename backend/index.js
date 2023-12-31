const express = require("express");
const cors = require("cors");
const app = express();
const doctorRoute = require("./routes/doctor");

app.use(cors());
app.use(express.json());

app.use("/api/doctor", doctorRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend Server Running !");
});
