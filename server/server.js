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
app.listen(8000, ()=>{
    console.log("server is listyening port 8000!");
});