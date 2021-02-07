const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("/index.html", { root: __dirname });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Client server has started listening on port ${PORT}`);
});
