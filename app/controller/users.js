'use strict';
const BaseConstroller = require('./base');

class UserConstroler extends BaseConstroller {
  async signup() {
    const { ctx } = this;
    let user = ctx.request.body;
    console.log('user', user);
    try {
      user = await ctx.model.Users.create(user);
      this.success({ user });
    } catch (error) {
      console.log('user', user);
      this.error({ error });
    }
  }

  async signin() {
    const { ctx } = this;
    let user = ctx.request.body;
    try {
      // 如果登录成功需要写入sission会话
      // 可以通过ctx.session.user 是否为null来判断此用户是否登录
      user = await ctx.model.Users.findOne(user);
      if (user) {
        ctx.session.user = user;
        this.success({ user });
      } else {
        this.error('用户名或密码错误');
      }

    } catch (error) {
      this.error({ error });

    }

  }

  async signout() {
    const { ctx } = this;
    ctx.session.user = null;
    console.log(55656);
    this.success('退出成功');
    console.log(5555);
  }
}

module.exports = UserConstroler;
