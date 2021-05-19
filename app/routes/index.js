const user = require('./user');
const goods = require('./goods');
module.exports = function(app, db) {
  user(app, db);
  goods(app,db);
};