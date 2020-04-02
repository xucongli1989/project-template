"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isServer = isServer;
exports.isBowser = isBowser;
exports.getGlobalObject = getGlobalObject;
exports.getDocument = getDocument;
exports.getLocalStorage = getLocalStorage;
exports.getSymbol = getSymbol;
exports.createNamespace = createNamespace;
exports.getValue = getValue;
exports.deepClone = deepClone;
exports.tryRun = tryRun;
exports.setTryRunErrorHandler = setTryRunErrorHandler;
exports.document = exports.globalObject = void 0;

/**
 * tryRun在调用异常时执行的函数
 */
var defaultTryRunErrorHandler = function defaultTryRunErrorHandler() {
  return null;
};
/**
 * 是否为服务器环境
 */


function isServer() {
  return typeof window === 'undefined';
}
/**
 * 是否为浏览器环境
 */


function isBowser() {
  return !isServer();
}
/**
 * 获取全局对象
 */


function getGlobalObject() {
  if (isBowser()) {
    return window;
  }

  return global;
}
/**
 * 当前环境中的全局对象
 */


var globalObject = getGlobalObject();
/**
 * 获取document对象，若没有，则为null
 */

exports.globalObject = globalObject;

function getDocument() {
  return globalObject.document || null;
}
/**
 * 当前环境中的document对象，若没有，则为null
 */


var document = getDocument();
/**
 * 获取localStorage对象，若没有，则为null
 */

exports.document = document;

function getLocalStorage() {
  return globalObject.localStorage || null;
}
/**
 * 获取Symbol类型，若没有，则为null
 */


function getSymbol(desc) {
  var g = globalObject;
  return g.Symbol ? g.Symbol(desc) : null;
}
/**
 * 创建全局命名空间
 * @param name 名称，如"A.B.C"
 * @returns 全局对象，如：window.A.B.C
 */


function createNamespace(name) {
  if (!name) {
    return null;
  }

  var obj = globalObject;
  var tokens = name.split(".");
  var token = "";

  while (tokens.length > 0) {
    token = tokens.shift();

    if (typeof obj[token] === "undefined") {
      obj[token] = {};
    }

    obj = obj[token];
  }

  return obj;
}
/**
 * 获取指定对象的指定属性
 * @param obj 对象
 * @param path 属性路径，如：a.b.c
 * @returns 返回obj.a.b.c，如果获取失败，则返回null
 */


function getValue(obj, path) {
  if (!obj || !path) {
    return null;
  }

  var temp = obj;

  try {
    path.split(".").forEach(function (keyName) {
      temp = temp[keyName];
    });

    if (typeof temp == 'undefined') {
      return null;
    }

    return temp;
  } catch (e) {
    return null;
  }
}
/**
 * 深度clone
 */


function deepClone(obj) {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (e) {
    return null;
  }
}
/**
 * 尝试运行指定function；若异常，则执行全局配置的异常处理函数tryRunErrorHandler，并返回null
 * @param fn  函数名
 * @param args 参数
 */


function tryRun(fn) {
  if (!fn) {
    return null;
  }

  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  } catch (e) {
    if (defaultTryRunErrorHandler) {
      defaultTryRunErrorHandler(e);
    }

    return null;
  }
}
/**
 * 重新设置全局异常处理函数
 */


function setTryRunErrorHandler(fn) {
  defaultTryRunErrorHandler = fn;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGliLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXIiLCJpc1NlcnZlciIsIndpbmRvdyIsImlzQm93c2VyIiwiZ2V0R2xvYmFsT2JqZWN0IiwiZ2xvYmFsIiwiZ2xvYmFsT2JqZWN0IiwiZ2V0RG9jdW1lbnQiLCJkb2N1bWVudCIsImdldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldFN5bWJvbCIsImRlc2MiLCJnIiwiU3ltYm9sIiwiY3JlYXRlTmFtZXNwYWNlIiwibmFtZSIsIm9iaiIsInRva2VucyIsInNwbGl0IiwidG9rZW4iLCJsZW5ndGgiLCJzaGlmdCIsImdldFZhbHVlIiwicGF0aCIsInRlbXAiLCJmb3JFYWNoIiwia2V5TmFtZSIsImUiLCJkZWVwQ2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0cnlSdW4iLCJmbiIsImFyZ3MiLCJzZXRUcnlSdW5FcnJvckhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7QUFHQSxJQUFJQSx5QkFBMEMsR0FBRztBQUFBLFNBQU0sSUFBTjtBQUFBLENBQWpEO0FBRUE7Ozs7O0FBR08sU0FBU0MsUUFBVCxHQUFvQjtBQUN2QixTQUFPLE9BQVFDLE1BQVIsS0FBb0IsV0FBM0I7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNDLFFBQVQsR0FBb0I7QUFDdkIsU0FBTyxDQUFDRixRQUFRLEVBQWhCO0FBQ0g7QUFFRDs7Ozs7QUFHTyxTQUFTRyxlQUFULEdBQW1EO0FBQ3RELE1BQUlELFFBQVEsRUFBWixFQUFnQjtBQUNaLFdBQU9ELE1BQVA7QUFDSDs7QUFDRCxTQUFPRyxNQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHTyxJQUFNQyxZQUFZLEdBQUdGLGVBQWUsRUFBcEM7QUFFUDs7Ozs7O0FBR08sU0FBU0csV0FBVCxHQUFpQztBQUNwQyxTQUFTRCxZQUFELENBQXNCRSxRQUF0QixJQUFrQyxJQUExQztBQUNI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VHlwZSB9IGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb21tb25cIlxyXG5cclxuLyoqXHJcbiAqIHRyeVJ1buWcqOiwg+eUqOW8guW4uOaXtuaJp+ihjOeahOWHveaVsFxyXG4gKi9cclxubGV0IGRlZmF1bHRUcnlSdW5FcnJvckhhbmRsZXI6IEFueUZ1bmN0aW9uVHlwZSA9ICgpID0+IG51bGxcclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbkuLrmnI3liqHlmajnjq/looNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NlcnZlcigpIHtcclxuICAgIHJldHVybiB0eXBlb2YgKHdpbmRvdykgPT09ICd1bmRlZmluZWQnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbkuLrmtY/op4jlmajnjq/looNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvd3NlcigpIHtcclxuICAgIHJldHVybiAhaXNTZXJ2ZXIoKVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5YWo5bGA5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsT2JqZWN0KCk6IFdpbmRvdyB8IE5vZGVKUy5HbG9iYWwge1xyXG4gICAgaWYgKGlzQm93c2VyKCkpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2xvYmFsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvZPliY3njq/looPkuK3nmoTlhajlsYDlr7nosaFcclxuICovXHJcbmV4cG9ydCBjb25zdCBnbG9iYWxPYmplY3QgPSBnZXRHbG9iYWxPYmplY3QoKVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPlmRvY3VtZW505a+56LGh77yM6Iul5rKh5pyJ77yM5YiZ5Li6bnVsbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERvY3VtZW50KCk6IERvY3VtZW50IHtcclxuICAgIHJldHVybiAoKGdsb2JhbE9iamVjdCBhcyBhbnkpLmRvY3VtZW50IHx8IG51bGwpIGFzIERvY3VtZW50XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvZPliY3njq/looPkuK3nmoRkb2N1bWVudOWvueixoe+8jOiLpeayoeacie+8jOWImeS4um51bGxcclxuICovXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KClcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIOiOt+WPlmxvY2FsU3RvcmFnZeWvueixoe+8jOiLpeayoeacie+8jOWImeS4um51bGxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKTogU3RvcmFnZSB7XHJcbiAgICByZXR1cm4gKChnbG9iYWxPYmplY3QgYXMgYW55KS5sb2NhbFN0b3JhZ2UgfHwgbnVsbCkgYXMgU3RvcmFnZVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+WU3ltYm9s57G75Z6L77yM6Iul5rKh5pyJ77yM5YiZ5Li6bnVsbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbChkZXNjPzogc3RyaW5nKTogYW55IHtcclxuICAgIGNvbnN0IGcgPSBnbG9iYWxPYmplY3QgYXMgYW55XHJcbiAgICByZXR1cm4gZy5TeW1ib2wgPyBnLlN5bWJvbChkZXNjKSA6IG51bGxcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7uuWFqOWxgOWRveWQjeepuumXtFxyXG4gKiBAcGFyYW0gbmFtZSDlkI3np7DvvIzlpoJcIkEuQi5DXCJcclxuICogQHJldHVybnMg5YWo5bGA5a+56LGh77yM5aaC77yad2luZG93LkEuQi5DXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZXNwYWNlKG5hbWU6IHN0cmluZyk6IG9iamVjdCB7XHJcbiAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbCBhcyBhbnlcclxuICAgIH1cclxuICAgIGxldCBvYmo6IGFueSA9IGdsb2JhbE9iamVjdFxyXG4gICAgY29uc3QgdG9rZW5zID0gbmFtZS5zcGxpdChcIi5cIilcclxuICAgIGxldCB0b2tlbiA9IFwiXCJcclxuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRva2VuID0gdG9rZW5zLnNoaWZ0KCkgYXMgc3RyaW5nXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmpbdG9rZW5dID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIG9ialt0b2tlbl0gPSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBvYmogPSBvYmpbdG9rZW5dXHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bmjIflrprlr7nosaHnmoTmjIflrprlsZ7mgKdcclxuICogQHBhcmFtIG9iaiDlr7nosaFcclxuICogQHBhcmFtIHBhdGgg5bGe5oCn6Lev5b6E77yM5aaC77yaYS5iLmNcclxuICogQHJldHVybnMg6L+U5Zueb2JqLmEuYi5j77yM5aaC5p6c6I635Y+W5aSx6LSl77yM5YiZ6L+U5ZuebnVsbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlPFQ+KG9iajogQW55S2V5VmFsdWVUeXBlLCBwYXRoOiBzdHJpbmcpOiBUIHwgbnVsbCB7XHJcbiAgICBpZiAoIW9iaiB8fCAhcGF0aCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBsZXQgdGVtcCA9IG9ialxyXG4gICAgdHJ5IHtcclxuICAgICAgICBwYXRoLnNwbGl0KFwiLlwiKS5mb3JFYWNoKGtleU5hbWUgPT4ge1xyXG4gICAgICAgICAgICB0ZW1wID0gdGVtcFtrZXlOYW1lXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHR5cGVvZiAodGVtcCkgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXAgYXMgVFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmt7HluqZjbG9uZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZTxUPihvYmo6IFQpOiBUIHwgbnVsbCB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWwneivlei/kOihjOaMh+WummZ1bmN0aW9u77yb6Iul5byC5bi477yM5YiZ5omn6KGM5YWo5bGA6YWN572u55qE5byC5bi45aSE55CG5Ye95pWwdHJ5UnVuRXJyb3JIYW5kbGVy77yM5bm26L+U5ZuebnVsbFxyXG4gKiBAcGFyYW0gZm4gIOWHveaVsOWQjVxyXG4gKiBAcGFyYW0gYXJncyDlj4LmlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cnlSdW48VD4oZm46IEFueUZ1bmN0aW9uVHlwZSwgLi4uYXJnczogYW55W10pOiBUIHwgbnVsbCB7XHJcbiAgICBpZiAoIWZuKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGZuKC4uLmFyZ3MpIGFzIFRcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBpZiAoZGVmYXVsdFRyeVJ1bkVycm9ySGFuZGxlcikge1xyXG4gICAgICAgICAgICBkZWZhdWx0VHJ5UnVuRXJyb3JIYW5kbGVyKGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDph43mlrDorr7nva7lhajlsYDlvILluLjlpITnkIblh73mlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUcnlSdW5FcnJvckhhbmRsZXIoZm46IEFueUZ1bmN0aW9uVHlwZSkge1xyXG4gICAgZGVmYXVsdFRyeVJ1bkVycm9ySGFuZGxlciA9IGZuXHJcbn0iXX0=