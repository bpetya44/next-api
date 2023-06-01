import express = require('express');

import {get, merge} from 'lodash';

import { getUserBySessionToken } from '../db/users';

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        const sessionToken = req.cookies['MY-AUTH-COOKIE'];
        if(!sessionToken) {
            return res.sendStatus(403);
        }

        const existingUser = await getUserBySessionToken(sessionToken);
        if(!existingUser) {
            return res.sendStatus(403);
        }

        merge(req, {identity: existingUser});

    } catch (err) {
       console.log(err);
       return res.sendStatus(400);
    }
}