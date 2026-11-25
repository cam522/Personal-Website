const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const websiteDirectory = path.join(__dirname, "..");

app.use(cors());
app.use(express.json());
app.use(express.static(websiteDirectory));


app.get("/projects", (req, res) => {
    res.json([
        {
            name: "Jellyfin Home Server",
            description: "Self-hosted media server running on my Lenovo ThinkCentre M720q"
        },
        {
            name: "Personal Website",
            description: "Portfolio website built with HTML, CSS and JavaScript"
        }
    ]);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Website and API running at http://localhost:${port}`);
});