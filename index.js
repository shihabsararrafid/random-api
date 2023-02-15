const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./Routes/v1/user.route");
app.use(cors());
app.use(express.json());

const port = 5000;
app.use("/api/v1/user", userRoutes);
app.get("/", (req, res) => {
  res.send(
    "The Server is running successfully and sometime heroku fail to serve my content"
  );
});

app.listen(port, () => {
  console.log("This is running on the port", port);
});
