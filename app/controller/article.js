'use strict';
const BaseController = require('./base');

class ArticleController extends BaseController {
  async index() {
    const { ctx } = this;
    let { pageNum = 1, pageSize = 5, keyword = '' } = ctx.query;
    pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
    pageSize = isNaN(pageSize) ? 5 : parseInt(pageSize);
    const query = {};
    if (keyword) {
      query.$or = [{ title: new RegExp(keyword) }, { content: new RegExp(keyword) }];
    }
    try {
      const items = await ctx.model.Article.find(query)
        .skip((pageNum - 1) * pageSize);
      this.success(items);
    } catch (error) {
      this.error(error);
    }
  }

  async create() {
    const { ctx } = this;
    try {

    } catch (error) {
      this.error(error);
    }
  }

  async update() {
    const { ctx } = this;
    try {

    } catch (error) {
      this.error(error);
    }
  }

  async destroy() {
    const { ctx } = this;
    try {

    } catch (error) {
      this.error(error);
    }
  }

}

module.exports = ArticleController;
