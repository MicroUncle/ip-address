/*
 * @Author: wanxiaodong
 * @Date: 2018-11-14 14:33:37
 * @Last Modified by: wanxiaodong
 * @Last Modified time: 2018-11-14 14:49:16
 */
const add = require('../src/index')
const expect = require('chai').expect

describe('两个数字相加', function(){
    it('1 + 1 好像等于2', function(){
        expect(add(1,1)).to.be.equal(2)
    })
    it('1 + undefined 好像等于NAN', function(){
        expect(add(1, undefined)).to.be.NaN
    })
})
