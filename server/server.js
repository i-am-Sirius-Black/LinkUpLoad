import express from 'express';
import cors from 'cors';
import DBConnection from './database/db.js';
import router from './routes/routes.js';

const app=express();

//Middlewares
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.use('/', router);

DBConnection();

const Port = process.env.PORT || 8000

app.listen(Port, ()=>{
    console.log("server is listening port 8000!");
});