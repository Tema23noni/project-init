import http from 'node:http';
import * as process from 'node:process';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

export const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(cookieParser());

server.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`);
});
