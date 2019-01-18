module.exports =  (router) => {
  router.get('/welcome', async function (ctx, next) {
    ctx.state = {
      title: 'welcome'
    };

    await ctx.render('welcome', {title: ctx.state});
  });

  router.get('/test', async function (ctx, next) {
    ctx.state = {
      title: 'test'
    };

    await ctx.render('test', {title: ctx.state});
  })
}
