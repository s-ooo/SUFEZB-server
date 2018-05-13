// order.js

const { mysql } = require('../qcloud');
var sql = require('../db/sql');

module.exports = async ctx => {
	
	let c = ctx.query

	var param = [
		c.taskId
	]

	var res = await mysql.raw(sql.order.queryByTaskId, param, function(err, result){});
	
	ctx.state.data = res

}
