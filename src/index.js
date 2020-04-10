const express = require ('express');
const mongoose = require ('mongoose')
const questionario =require('./Controllers/QuestionarioController')
const routes = require('./Routes')

const app = express();

mongoose.connect("mongodb+srv://root:661449@usuariosos-ngauz.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(express.json());
app.use(routes);


app.listen(3000);
