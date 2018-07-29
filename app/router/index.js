'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const api = require('./api');

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  api(app);
};
