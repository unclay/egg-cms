'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const loginApi = app.middleware.loginApi();
  router.post('/api/v1/login', controller.user.login);
  router.get('/api/v1/logout', controller.user.logout);
  router.get('/api/v1/member', loginApi, controller.user.member);
  router.resources('user', '/api/v1/user', loginApi, controller.user);
};
