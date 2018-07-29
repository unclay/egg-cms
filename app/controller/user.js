'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // global
  async login() {
    const { ctx, app } = this;
    const body = ctx.request.body;
    const loginUser = await app.mysql.get(app.table('user'), {
      username: body.username,
      password: body.password,
    });
    if (!loginUser) {
      return ctx.apiError(902, '用户不存在，或密码不正确');
    }
    ctx.session.user = {
      id: loginUser.id,
      username: loginUser.username,
    };
    ctx.api(ctx.session.user);
  }
  member() {
    const { ctx } = this;
    ctx.api(ctx.session.user);
  }
  logout() {
    const { ctx } = this;
    delete ctx.session.user;
    ctx.api('已退出登录');
  }
  // namespace
  async index() {
    const { ctx } = this;
    if (ctx.isAuthenticated()) {
      // show user info
    } else {
      // redirect to origin url by ctx.session.returnTo
      ctx.session.returnTo = ctx.path;
      ctx.body = '1231221';
    }
  }
}

module.exports = UserController;
