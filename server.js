import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
const morgan = require('morgan')
import dotenv from 'dotenv'
import pdrRourtes from './src/routes/pdrRoute'
dotenv.config()

const app = express()
const port = process.env.PORT

const mongoDb_url = process.env.MONGODB_URL
const mongoDb_url_local = process.env.MONGODB_URL_LOCAL

//midelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Db Connection
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoDb_url, {
    useNewUrlParser: true,
  })
  .then(() => console.log(`la base locale tourne sur 27017`))
  .catch((err) => console.log(err));

pdrRourtes(app)

app.listen(port, () => console.log(`le serveur tourne sur le port ${port}`))


/* mongod --port 27017 --dbpath G:\Dbs\23-Pdrs2022 --logpath G:\Dbs\23-Pdrs2022\mongod_27017.log */