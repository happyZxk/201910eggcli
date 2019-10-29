'use strict';
const { Controller } = require('egg');
module.exports = class BaseConstroller extends Controller {
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
