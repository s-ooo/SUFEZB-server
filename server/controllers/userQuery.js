// userQuery.js

const { mysql } = require('../qcloud')
const sql = require('../db/sql')

module.exports = async ctx => {
	
	let c = ctx.query

	let param1 = [
		null,
		c.openId,
		c.sessionKey,
		c.nickName,
		c.avatarUrl,
		null,
		null,
		0,
		c.openId,
	]

	let param2 = [
		c.openId
	]

	let res1 = await mysql.raw(sql.user.insert, param1, function(err, result){});

	let res2 = await mysql.raw(sql.user.queryByOpenId, param2, function(err, result){});
	
	ctx.state.data = {
		res1: res1,
		res2: res2
	}

}