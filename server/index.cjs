const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/auth", (req, res) => {
    res.json({ message: "Server collegato!" })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});