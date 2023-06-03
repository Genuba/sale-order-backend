import express from 'express';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
