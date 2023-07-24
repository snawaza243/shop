const express = require("express")
const app = express();
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")

const cors = require("cors")




const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected DB"))
  .catch((err) => {
    console.log(err)
  });

  app.use(cors());
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);


app.get('/', (req, res) => {
  res.json({ message: 'Welcome jto the API!' });
});





const port = 5000
app.listen(process.env.PORT || port, () => {
  console.log("Backend is running! at " + port)
})