// submitStuInfo.js

const { mysql } = require('../qcloud')
var sql = require('../db/sql')

module.exports = async ctx => {
	
	let cData = ctx.query;

	var stuInfo = [
		cData.userId,
		cData.stuName,
		cData.stuID,
		cData.phone,
		'wre',
		'ewqt',
		null,
		0
	];

	var res = await mysql.raw(sql.stu.insert, stuInfo, function(err, result){});
	ctx.state.data = res;

}