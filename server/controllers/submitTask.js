// submitTask.js

const { mysql } = require('../qcloud');
var sql = require('../db/sql');

module.exports = async ctx => {
	
	let c = ctx.query;

	var param = [
		null,
		c.userId,
		c.placeStart,
		c.placeArrive,
		c.pkgDateTime,
		c.taskAward,
		c.taskNote,
		c.pkgRecipient,
		c.pkgRecipientContact,
		c.pkgCode,
		null,
		''
	];

	var res = await mysql.raw(sql.task.insert, param, function(err, result){});
	ctx.state.data = res;

}