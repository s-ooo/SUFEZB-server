// userLogin.js

const request = require('request')

token = {}

module.exports = async ctx => {


	c = await ctx.query

	url = await 'https://api.weixin.qq.com/sns/jscode2session?appid=wxc90056307d3daaf6&secret=2aa76f1a0f96f0e26db683f6f340ab70&js_code='
	+ c.code
	+'&grant_type=authorization_code'

	res = await request(url, function (error, response, body) {
  		
    	token = JSON.parse(body)

	})

	ctx.state.data = await {
		res: res,
		token: token,
		
	}


}