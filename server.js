const express = require("express"); // To create a server
const mongoose = require("mongoose"); // To use mongoose and deal with mongodb
const bodyParser = require("body-parser"); // To be able to use req.body
const users = require("./routes/api/users"); // Route users
const profile = require("./routes/api/profile"); // Route profile
const posts = require("./routes/api/posts"); // route posts

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true } //Added { useNewUrlParser: true } to avoid: DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
  )
  .then(() => console.log("🍺  MongoDB Connected to DataBase ✔"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`🍺  Serever running on port ${port} ✔`));
