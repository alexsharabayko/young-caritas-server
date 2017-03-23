const Koa = require('koa');
const mongoose = require('mongoose');

const actionsRouter = require('./api/actions');

const DB_NAME = 'young-caritas';
const MONGO_CON_STR = `mongodb://localhost:27017/${DB_NAME}`;
mongoose.connect(MONGO_CON_STR, {});

mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected to ${DB_NAME}`);
});
mongoose.connection.on('error', function (err) {
  console.log(`Mongoose error: ${err}`);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

const app = new Koa();
app
  .use(actionsRouter.routes())
  .use(actionsRouter.allowedMethods());

app.listen(5555, () => console.log('Server started, please visit: http://127.0.0.1:5555'));