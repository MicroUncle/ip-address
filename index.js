/*
 * @Author: wanxiaodong
 * @Date: 2018-11-14 14:33:00
 * @Last Modified by: wanxiaodong
 * @Last Modified time: 2018-11-16 10:47:41
 */
const keyName = 'address'
module.exports = function (req, res, next) {
    const result = {
      ip: '',
      source: ''
    }
    try {
      let _req = req;
      if (req.req) {
        // koa
        _req = req.req;
      }
      // console.log(req)
      result.source = _req.headers['x-forwarded-for'] ||
        _req.connection.remoteAddress ||
        _req.socket.remoteAddress ||
        _req.connection.socket.remoteAddress;
      // x-forwarded-for 可能存在多个代理
      result.source = result.source.split(',')[0];
      result.ip = result.source.replace(/[^\d.]/igm, '');
      if (req.append) {
        req.append(keyName, result)
      } else {
        req[keyName] = result;
      }
    } catch(e) {
      console.log(e.message)
    }
    process.env.NODE_ENV && console.log('ip address is:', result)
    next && next()
}
