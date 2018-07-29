'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532834829974_8532';

  // add your config here
  config.middleware = [ 'loginApi' ];

  config.loginApi = {
    enable: false,
    match(ctx) {
      if (ctx.path.match(/^\/api\//)) {
        return true;
      }
    },
  };

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'lin123456',
      database: 'eggcms',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    prefix: 'cms',
  };

  // config.passportLocal = {
  //   // usernameField: 'username',
  //   // passwordField: 'password',
  // };

  config.security = {
    csrf: false,
  };

  return config;
};
