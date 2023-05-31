import express = require('express');
import { getAllUsers } from "../controllers/users";
import { isAuthenticated } from '../middlewares'; 

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);

};



