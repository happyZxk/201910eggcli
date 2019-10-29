'use strict';
const { Controller } = require('egg');
module.exports = class BaseConstroller extends Controller {
  get user() {
    return this.ctx.user.sission;
  }

  async getPager(modName, fields = []) {
    const { ctx } = this;
    let { pageNum = 1, pageSize = 5, keyword = '' } = ctx.query;
    pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
    pageSize = isNaN(pageSize) ? 5 : parseInt(pageSize);
    const query = {};
    if (keyword && fields.length > 0) {
      query.$or = fields.map(field => ({ [field]: new RegExp(keyword) }));
    }
    return await ctx.model[modName].find(query).
      skip((pageNum - 1) * pageSize).
      limit(pageSize);
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
