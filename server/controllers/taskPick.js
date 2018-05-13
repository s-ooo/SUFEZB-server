// taskPick.js

const { mysql } = require('../qcloud');
var sql = require('../db/sql');

module.exports = async ctx => {
	
	let c = ctx.query

	var param1 = [
		1,
		c.taskId
	]

	var param2 = [
		null,
		c.taskId,
		c.authorId,
		c.courierId,
		null,
		''
	]

	var res1 = await mysql.raw(sql.task.updateTaskStatus, param1, function(err, result){});

	var res2 = await mysql.raw(sql.order.insert, param2, function(err, result){});

	
	ctx.state.data = {
		res1: res1,
		res2: res2,
	}

}

