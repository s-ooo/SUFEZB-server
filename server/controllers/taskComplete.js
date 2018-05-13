// taskComplete.js

const { mysql } = require('../qcloud');
var sql = require('../db/sql');

module.exports = async ctx => {
	
	let c = ctx.query

	var param = [
		1,
		c.taskId
	]

	var res = await mysql.raw(sql.order.updateOrderStatus, param, function(err, result){});
	
	ctx.state.data = res

}
