/*
 * @Author: wanxiaodong
 * @Date: 2018-11-14 14:18:12
 * @Last Modified by: wanxiaodong
 * @Last Modified time: 2018-11-14 15:57:10
 */
const http = require('http')
const getIp = require('./index')

http.createServer(function (req, res){
    getIp(req, res)
    res.end('done')
}).listen(8000, function() {
    console.log('server is ready')
})
