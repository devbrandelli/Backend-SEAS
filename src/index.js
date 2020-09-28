const express = require ('express');
const mongoose = require ('mongoose')
const routes = require('./Routes')
const cors = require('cors')
const port = 3000

const app = express();
app.use(cors());

mongoose.connect("mongodb+srv://root:661449@usuariosos-ngauz.mongodb.net/SOSQA?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3000, () => {
    console.log("Listen on port ", process.env.PORT || port)
});
