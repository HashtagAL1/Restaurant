const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3333;
const app = express();
require('./config/dbConfig');

const authRouter = require('./routers/authRouter');
const mealRouter = require('./routers/mealRouter');
const orderRouter = require('./routers/orderRouter');
const userRouter = require('./routers/userRouter');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/meals', mealRouter);
app.use('/orders', orderRouter);
app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});