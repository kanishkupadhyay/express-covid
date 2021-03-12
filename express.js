const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");
const route = require("./Routing/route");
const staticPath = path.join(__dirname, "/public");

// Custom middleware for css and js file
app.use(express.static(staticPath));

// View engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "public/views"));

// Partials
const partialPath = path.join(__dirname, "/partials");
hbs.registerPartials(partialPath);

// Routing
app.use(route);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));