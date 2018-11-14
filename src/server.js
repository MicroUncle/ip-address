/*
 * @Author: wanxiaodong
 * @Date: 2018-11-14 14:18:12
 * @Last Modified by: wanxiaodong
 * @Last Modified time: 2018-11-14 16:40:11
 */
const http = require('http')
let _server = null
module.exports = {
    server: function (middleware) {
        _server = http.createServer(function (req, res){
            middleware && middleware(req, res)
            res.end('done')
        }).listen(8000, function() {
            console.log('server is ready')
        })
    },
    close() {
        _server && _server.close()
    }
}
