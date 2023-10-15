const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
require("./db/conn");
const User = require("./models/detail");
const path = require("path");
const hbs = require("hbs");

//static path
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

//views path
const views_path = path.join(__dirname, "../templates/views");
app.set("views", views_path);

//partials path
const partials_path = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.get("/register", (req, res) => {
  res.render("register");
});
//creating new user in our database
app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    if (password === cpassword) {
    //   const userdetails = await User.create({
        const userdetails = new User({
        fullName: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.number,
        password: password,
        confirmPassword: cpassword,
        gender: req.body.gender,
      });
      const detail = await userdetails.save();
      res.status(201).render("home");
    } else {
      console.log("password not match");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/", (req, res) => {
  res.send("home page");
});
app.listen(port, () => {
  console.log(`connect is set up at port ${port}`);
});
