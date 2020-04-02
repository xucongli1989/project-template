"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendQueryString = appendQueryString;
exports.getUrlParameter = getUrlParameter;

/**
 * 在url后面追加查询字符串
 * @param urlStr url地址，如location.href
 * @param queryString 要追加的查询串，如："a=123&b=456"
 */
function appendQueryString(urlStr, queryString) {
  var url = urlStr;

  if (!url) {
    return "";
  }

  if (!queryString) {
    return url;
  }

  var hash = "";
  var anchorIdx = url.indexOf('#');

  if (anchorIdx >= 0) {
    hash = url.substring(anchorIdx);
    url = url.substr(0, anchorIdx);
  }

  return "".concat(url).concat(url.includes("?") ? "&" : "?").concat(queryString).concat(hash);
}
/**
 * 从查询串中获取指定参数
 * @param search 查询串，如：location.search
 * @param paramName 参数名
 */


function getUrlParameter(search, paramName) {
  var name = paramName.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vdXJsLnRzIl0sIm5hbWVzIjpbImFwcGVuZFF1ZXJ5U3RyaW5nIiwidXJsU3RyIiwicXVlcnlTdHJpbmciLCJ1cmwiLCJoYXNoIiwiYW5jaG9ySWR4IiwiaW5kZXhPZiIsInN1YnN0cmluZyIsInN1YnN0ciIsImluY2x1ZGVzIiwiZ2V0VXJsUGFyYW1ldGVyIiwic2VhcmNoIiwicGFyYW1OYW1lIiwibmFtZSIsInJlcGxhY2UiLCJyZWdleCIsIlJlZ0V4cCIsInJlc3VsdHMiLCJleGVjIiwiZGVjb2RlVVJJQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztBQUtPLFNBQVNBLGlCQUFULENBQTJCQyxNQUEzQixFQUEyQ0MsV0FBM0MsRUFBZ0U7QUFDbkUsTUFBSUMsR0FBRyxHQUFHRixNQUFWOztBQUNBLE1BQUksQ0FBQ0UsR0FBTCxFQUFVO0FBQ04sV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDRCxXQUFMLEVBQWtCO0FBQ2QsV0FBT0MsR0FBUDtBQUNIOztBQUNELE1BQUlDLElBQUksR0FBRyxFQUFYO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixHQUFHLENBQUNHLE9BQUosQ0FBWSxHQUFaLENBQWxCOztBQUNBLE1BQUlELFNBQVMsSUFBSSxDQUFqQixFQUFvQjtBQUNoQkQsSUFBQUEsSUFBSSxHQUFHRCxHQUFHLENBQUNJLFNBQUosQ0FBY0YsU0FBZCxDQUFQO0FBQ0FGLElBQUFBLEdBQUcsR0FBR0EsR0FBRyxDQUFDSyxNQUFKLENBQVcsQ0FBWCxFQUFjSCxTQUFkLENBQU47QUFDSDs7QUFDRCxtQkFBVUYsR0FBVixTQUFnQkEsR0FBRyxDQUFDTSxRQUFKLENBQWEsR0FBYixJQUFvQixHQUFwQixHQUEwQixHQUExQyxTQUFnRFAsV0FBaEQsU0FBOERFLElBQTlEO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNNLGVBQVQsQ0FBeUJDLE1BQXpCLEVBQXlDQyxTQUF6QyxFQUE0RDtBQUMvRCxNQUFNQyxJQUFJLEdBQUdELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixLQUFsQixFQUF5QixLQUF6QixFQUFnQ0EsT0FBaEMsQ0FBd0MsTUFBeEMsRUFBZ0QsS0FBaEQsQ0FBYjtBQUNBLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsV0FBV0gsSUFBWCxHQUFrQixXQUE3QixDQUFkO0FBQ0EsTUFBTUksT0FBTyxHQUFHRixLQUFLLENBQUNHLElBQU4sQ0FBV1AsTUFBWCxDQUFoQjtBQUNBLFNBQU9NLE9BQU8sS0FBSyxJQUFaLEdBQW1CLEVBQW5CLEdBQXdCRSxrQkFBa0IsQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSCxPQUFYLENBQW1CLEtBQW5CLEVBQTBCLEdBQTFCLENBQUQsQ0FBakQ7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlnKh1cmzlkI7pnaLov73liqDmn6Xor6LlrZfnrKbkuLJcclxuICogQHBhcmFtIHVybFN0ciB1cmzlnLDlnYDvvIzlpoJsb2NhdGlvbi5ocmVmXHJcbiAqIEBwYXJhbSBxdWVyeVN0cmluZyDopoHov73liqDnmoTmn6Xor6LkuLLvvIzlpoLvvJpcImE9MTIzJmI9NDU2XCJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRRdWVyeVN0cmluZyh1cmxTdHI6IHN0cmluZywgcXVlcnlTdHJpbmc6IHN0cmluZykge1xyXG4gICAgbGV0IHVybCA9IHVybFN0clxyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFxdWVyeVN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB1cmxcclxuICAgIH1cclxuICAgIGxldCBoYXNoID0gXCJcIlxyXG4gICAgY29uc3QgYW5jaG9ySWR4ID0gdXJsLmluZGV4T2YoJyMnKVxyXG4gICAgaWYgKGFuY2hvcklkeCA+PSAwKSB7XHJcbiAgICAgICAgaGFzaCA9IHVybC5zdWJzdHJpbmcoYW5jaG9ySWR4KVxyXG4gICAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgYW5jaG9ySWR4KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke3VybH0ke3VybC5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wifSR7cXVlcnlTdHJpbmd9JHtoYXNofWBcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7juafpeivouS4suS4reiOt+WPluaMh+WumuWPguaVsFxyXG4gKiBAcGFyYW0gc2VhcmNoIOafpeivouS4su+8jOWmgu+8mmxvY2F0aW9uLnNlYXJjaFxyXG4gKiBAcGFyYW0gcGFyYW1OYW1lIOWPguaVsOWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybFBhcmFtZXRlcihzZWFyY2g6IHN0cmluZywgcGFyYW1OYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBwYXJhbU5hbWUucmVwbGFjZSgvW1tdLywgJ1xcXFxbJykucmVwbGFjZSgvW1xcXV0vLCAnXFxcXF0nKTtcclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnW1xcXFw/Jl0nICsgbmFtZSArICc9KFteJiNdKiknKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSByZWdleC5leGVjKHNlYXJjaCk7XHJcbiAgICByZXR1cm4gcmVzdWx0cyA9PT0gbnVsbCA/ICcnIDogZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG59Il19