import express = require('express');
import http = require('http');
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import cors = require('cors');
import compression = require('compression');        

const app = express();

app.use(cors({ origin: true, credentials: true}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
    });

