'use strict';

module.exports = options => {
  console.log(options);
  return async (ctx, next) => {
    if (!ctx.session.user) {
      ctx.apiError(901, '用户未登录');
    } else {
      await next();
    }
  };
};
