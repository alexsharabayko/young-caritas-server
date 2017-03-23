const Router = require('koa-router');

const router = new Router({
  prefix: '/actions'
});

router.get('/', (ctx) => {
  ctx.body = 'Home page';
});

router.get('/goro', (ctx) => {
  ctx.body = 'Goro page';
});

module.exports = router;