// taskAuthor.js

const { mysql } = require('../qcloud')
var sql = require('../db/sql')

module.exports = async ctx => {

	let c = ctx.query;

	

	var param = [
		c.authorId
	];

	var resAuthor = await mysql.raw(sql.task.queryAuthorById, param, function(err, result){});

	ctx.state.data = resAuthor;

}