const express = require("express");
const app = express();
const fs = require("@cyclic.sh/s3fs");

fs.writeFile("saheb.txt", "sathebsaheb", "utf-8", (err, data) => {
  console.log(err, data);
});

fs.readFile("saheb.txt", "utf-8", (err, data) => {
  console.log(err, data);
});

app.listen(5000, () => console.log("satsaheb"));
