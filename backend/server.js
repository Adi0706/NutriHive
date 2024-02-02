const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 8000
const UserSignUpModel = require('./Models/UserSignup')


const app = express()
app.use(express.json())
app.use(cors())

//mongoDb connection
mongoose.connect("mongodb://127.0.0.1:27017/NutriHive", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });


  app.post('/signup', async (req, res) => {// why async ? so that once the create operation is done we can move to further operations / also to send one request at a time and there is no load on the server
    try {
        const existingUser = await UserSignUpModel.findOne({ email: req.body.email }); // finds email from the frontend 

        if (existingUser) {
            return res.status(400).json("user exists"); // if email exists then it gives 400 error

        }

        const newRegistration = await UserSignUpModel.create(req.body); // creates a table / dataSchema of values coming from frontend in body.req
        console.log(newRegistration);
        return res.status(200).json(newRegistration);// status shown when new user signs up 

    } catch (error) {
        console.error(error);
        return res.status(500).json("Server Error");
    }
});

//login routing
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserSignUpModel.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        res.json("Login Successful !");
      } else {
        res.json("Incorrect Password !");
      }
    } else {
      res.json("User not found !");
    }
  } catch (error) {
    res.json("Error in login: " + error);
  }
});




app.listen(PORT, () => {
    console.log(`Server is running on Port Number ${PORT}`);
});


