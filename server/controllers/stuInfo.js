// stuInfo.js

const { mysql } = require('../qcloud')
var sql = require('../db/sql')

module.exports = async ctx => {

	let c = ctx.query;

	var param = [
		c.id
	];

	var res = await mysql.raw(sql.stu.queryById, param, function(err, result){})
	ctx.state.data = res;

}