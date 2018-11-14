/*
 * @Author: wanxiaodong
 * @Date: 2018-11-14 15:41:21
 * @Last Modified by: wanxiaodong
 * @Last Modified time: 2018-11-14 15:44:54
 */
const http = require('http')
const expect = require('chai').expect

describe('请求获取ip地址', function () {
    http.get('/', function(res) {
        res.on('data')
    })
})
