/*
 * @Author: wanxiaodong
 * @Date: 2018-11-14 15:41:21
 * @Last Modified by: wanxiaodong
 * @Last Modified time: 2018-11-14 16:42:25
 */
const http = require('http')
const expect = require('chai').expect;
const {server, close} = require('../src/server')
const getIp = require('../src/index')

describe('请求获取ip地址', function () {
    let ip;
    beforeEach(function(done) {
        server(function() {
            ip = getIp(...arguments)
        });
        setTimeout(function(){
            http.get('http://127.0.0.1:8000/', function() {
                close()
                done()
            })
        }, 1000)
    })
    it('获取ip地址', function() {
        expect(ip).to.match(/(\d.?){4}/)
    })
})