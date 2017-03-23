const Router = require('koa-router');
const Action = require('../../models/action');

const router = new Router({
  prefix: '/actions'
});

router.get('/', async function (ctx) {
  ctx.body = await Action.find({});
});

router.get('/goro', (ctx) => {
  ctx.body = 'Goro page';
});

module.exports = router;