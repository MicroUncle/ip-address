/*
 * @Author: wanxiaodong
 * @Date: 2018-11-14 14:33:00
 * @Last Modified by: wanxiaodong
 * @Last Modified time: 2018-11-14 16:16:07
 */
module.exports = function (req, res, next) {
    let ip = req.connection.remoteAddress;
    ip = ip.replace(/[^\d.]/igm, '');
    req.ipAddress = ip;
    next && next()
    return ip
}
