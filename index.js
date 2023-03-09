const mongoConnectionFun = require("./db");
const express = require("express");
mongoConnectionFun();

const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Pooja ");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`epress connection to port ${port}`);
});
