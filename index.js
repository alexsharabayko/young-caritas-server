const Koa = require('koa');

const actionsRouter = require('./api/actions');

const app = new Koa();

app
  .use(actionsRouter.routes())
  .use(actionsRouter.allowedMethods());

app.listen(5555);