const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "api page" })
});

app.get("/", (req, res) => {
    res.json({ message: "server collegato" })
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});