// taskList.js

const { mysql } = require('../qcloud')
var sql = require('../db/sql');

module.exports = async ctx => {


  var res = await mysql.raw(sql.task.queryAll)

  ctx.state.data = res
  
}
