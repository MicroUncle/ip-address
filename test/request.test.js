/*
 * @Author: wanxiaodong
 * @Date: 2018-11-14 15:41:21
 * @Last Modified by: wanxiaodong
 * @Last Modified time: 2018-11-19 15:16:49
 */
const http = require('http')
const expect = require('chai').expect;
const {server, close} = require('./util/server')
const getIp = require('../index')

describe('请求获取ip地址', function () {
    let address;
    beforeEach(function(done) {
        server(function(req) {
            getIp(...arguments)
            address = req.address
        }, function (){
            http.get('http://127.0.0.1:8000/', function() {
                close()
                done()
            })
        });
    })
    it('获取ip地址', function() {
        expect(address.ip).to.match(/(\d.?){4}/)
    })
})
