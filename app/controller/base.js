'use strict';
const { Controller } = require('egg');
module.exports = class BaseConstroller extends Controller {
  get user1() {
    return this.ctx.user.sission;
  }
  success(data) {
    this.ctx.body = {
      code: 0,
      data,
    };
  }
  error(error) {
    console.error(error);
    this.ctx.body = {
      code: 1,
      error,
    };
  }
};
