import express from 'express';
import test from './routers/test';

const app = express();

app.use('/test', test);

app.listen(3000, () => console.log('listening on port 3000!'));
