/*
 * @Author: wanxiaodong
 * @Date: 2018-11-14 14:33:00
 * @Last Modified by: wanxiaodong
 * @Last Modified time: 2018-11-14 16:05:41
 */
module.exports = function (req, res, next) {
    const ip = req.socket;
    console.log(ip);
    next && next()
}
