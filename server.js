const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// all routes

// serving client files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, (err) => {
  err ? console.log(err.message) : "Server is running at port 3000";
});
