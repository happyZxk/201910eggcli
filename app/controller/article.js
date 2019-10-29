'use strict';
const BaseController = require('./base');

class ArticleController extends BaseController {
  async index() {
    try {
      const items = await this.getPager('Article', [ 'title', 'content' ]);
      this.success(items);
    } catch (error) {
      this.error(error);
    }
  }

  async create() {
    const { ctx } = this;
    let article = ctx.request.body;
    try {
      article = await ctx.model.Article.create(article);
      this.success('文章发表成功');
    } catch (error) {
      this.error(error);
    }
  }

  async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    const article = ctx.request.body;
    try {
      await ctx.model.Article.findByIdAndUpdate(id, article);
      this.success('更新文章成功');
    } catch (error) {
      this.error(error);
    }
  }

  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    try {
      await ctx.model.Article.findByIdAndRemove(id);
      this.success('删除文章成功');
    } catch (error) {
      this.error(error);
    }
  }

}

module.exports = ArticleController;
