import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';




const app = express();

/**
 * 
 * Middlewares
 * 
 */
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



/***
 * 
 * Routes
 * 
 */
import User from './api/routes/user';

app.use('/api/users', User);

/**
 * 
 * Database Configuration
 * 
 */

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Database Connected');
})


/**
 * 
 * App Listen Server
 * 
 */

app.listen(config.PORT, () => {
    console.log(`App Is Listenning in Port => ${config.PORT}`);
});