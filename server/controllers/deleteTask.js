// deleteTask.js

const { mysql } = require('../qcloud');
var sql = require('../db/sql');

module.exports = async ctx => {
	
	let c = ctx.query

	var param = [
		2,
		c.taskId
	]

	var res = await mysql.raw(sql.task.updateTaskStatus, param, function(err, result){});
	
	ctx.state.data = res

}
