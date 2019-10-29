'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/users/signup', controller.users.signup);
  router.post('/api/users/signin', controller.users.signin);
  router.get('/api/users/signout', controller.users.signout);
  router.resources('categories', '/api/categories', controller.categories);
  /**
   * 以上的方法写一个就等价于写四个下面的方法
   * router.get('categories', '/api/categories', controller.categories.index);
   * router.post('categories', '/api/categories', controller.categories.create);
   * router.put('categories', '/api/categories/:id', controller.categories.update);
   * router.delete('categories', '/api/categories/:id', controller.categories.destroy);
   */
  router.resources('article', '/api/article', controller.article);


};
