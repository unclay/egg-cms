'use strict';

module.exports = {
  api(data) {
    this.body = {
      code: 0,
      data,
    };
  },
  apiError(code = 1000, error) {
    /**
    1000 未知错误
    9xx 用户错误
      901 用户未登录
      902 用户不存在，或密码不正确
    */
    this.body = {
      code,
      error,
    };
  },
};
