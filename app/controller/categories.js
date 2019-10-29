'use strict';
const BaseConstroller = require('./base');
module.exports = class CategoriesController extends BaseConstroller {
  // 获取分类列表
  async index() {
    // http://127.0.0.1:7001/api/categories?pageNum=1&pageSize=2&keyWord=服装
    try {
      const items = await this.getPager('Category', [ 'name' ]);
      this.success({ items });
    } catch (error) {
      this.error(error);
    }
  }

  // 增加文章分类
  async create() {
    const { ctx } = this;
    const category = ctx.request.body;
    let doc;
    try {
      doc = await ctx.model.Category.findOne(category);
      if (doc) {
        this.error('此分类已经存在');
      } else {
        doc = await ctx.model.Category.create(category);
        this.success('添加分类成功');
      }
    } catch (error) {
      this.error(error);
    }
  }

  // 更新
  async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    const category = ctx.request.body;// {name:new}
    console.log('category', category, id);
    try {
      await ctx.model.Category.findByIdAndUpdate(id, category);// 根据id查找,条件是对应的传过来的
      this.success('更新成功');
    } catch (error) {
      this.error(error);

    }
  }

  // 删除列表类型
  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    try {
      await ctx.model.Category.findByIdAndRemove(id);
      this.success('删除成功');
    } catch (error) {
      this.error(error);
    }
  }
};
