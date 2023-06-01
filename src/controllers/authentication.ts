import express = require('express');

import { getUserByEmail, createUser } from '../db/users';
import { random, authentication } from '../helpers';


//user registration
export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, username } = req.body;
       
        if (!email || !password || !username) {
            return res.sendStatus(400);
        }
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return res.sendStatus(409);
        }

        const salt = random();
        const user = await createUser({
             email,
             username,
             authentication:{
                    salt,
                    password: authentication(salt, password),
             },
        });

        return res.status(201).json(user).end();
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
};


//user login
export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.sendStatus(400);
        }
        //check if user exists
        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');
        if (!user) {
            return res.sendStatus(404);
        }
        //check if password is correct
        const expectedHash = authentication(user.authentication.salt, password);
        if (user.authentication.password !== expectedHash) {
            return res.sendStatus(403);
        }

        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());
        await user.save();

        res.cookie('MY-AUTH-COOKIE', user.authentication.sessionToken, {
            domain: 'localhost',
            path: '/',
        });

        return res.status(200).json(user).end();

    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}
