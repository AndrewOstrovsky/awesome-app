const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});

console.log('App started');
app.listen(process.env.PORT || 8080);
