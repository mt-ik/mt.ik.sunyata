class Admin {
    async indexPage ( ctx ) {
        // 判断是否有session
        debugger
        if ( ctx.session && ctx.session.isLogin && ctx.session.userName ) {
          const title = 'work页面'
          await ctx.render('work', {
            title,
          })
        } else {
          // 没有登录态则跳转到错误页面
          ctx.redirect('/error')
        }
    }
}

module.exports = new Admin()