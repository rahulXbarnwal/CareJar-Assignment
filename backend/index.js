const express = require("express");
const cors = require("cors");
const app = express();
const doctorRoute = require("./routes/doctor");

const corsOptions = {
  origin: "http://carejar-assignment.com",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/doctor", doctorRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend Server Running !");
});
