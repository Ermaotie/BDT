const user = require('./user');
const goods = require('./goods');
const token = require('./token');
module.exports = function(app, db) {
  user(app, db);
  goods(app,db);
  token(app,db);
};