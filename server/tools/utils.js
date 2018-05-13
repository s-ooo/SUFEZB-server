// // utils.js
// const configs = require('../config')
// var request = require('request')

// getwechat: function (url, data) {
//         console.log(url)
//         return new Promise((resolve, reject) => {
//             request.get({
//                 url: url,
//                 method:'GET'
//             }, function(e, r, body) {
//                 if (e) reject(e);
//                 resolve(body)
//             })
//         })
//     };

// module.exports = async ctx(data) => {

//     //通过code换取用户隐私信息
//     let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${configs.appId}&secret=${configs.appSecret}&js_code=${data.code}&grant_type=authorization_code`;

//     let result = getwechat(url);
//     ctx.state.data = "【获取openid 请求结果】"

//     ctx.body = result
//     // think.log(result)
//     // return result;


    


// }