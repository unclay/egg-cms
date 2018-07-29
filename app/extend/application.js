'use strict';

module.exports = {
  table(table) {
    const prefix = this.config.mysql.prefix;
    if (prefix && typeof prefix === 'string') {
      return `${this.config.mysql.prefix}_${table}`;
    }
    return table;
  },
};
