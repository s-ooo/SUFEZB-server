// courier.js

const { mysql } = require('../qcloud');
var sql = require('../db/sql');

module.exports = async ctx => {
	
	let c = ctx.query

	var param = [
		c.userId
	]

	var res = await mysql.raw(sql.user.queryCourierByUserId, param, function(err, result){});
	
	ctx.state.data = res

}
