const express = require ('express');
const mongoose = require ('mongoose')
const routes = require('./Routes')
const cors = require('cors')

const app = express();

mongoose.connect("mongodb+srv://root:661449@usuariosos-ngauz.mongodb.net/SOSQA?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3003);
