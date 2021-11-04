/**
 * 
 * @param data 数据源（eg: {"name": "zhangsan", "age": 18}）
 * @param isPrefix 是否展示地址栏的"?"
 * @param arrayFormat 
 * @returns 将对象转换为Url参数
 */
 export function queryParams(data = {}, isPrefix = true, arrayFormat = 'brackets') {
  let prefix = isPrefix ? '?' : ''
  let _result = []
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';
  for (let key in data) {
    let value = data[key]
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      continue;
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (let i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i])
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(_value => {
            _result.push(key + '[]=' + _value)
          })
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(_value => {
            _result.push(key + '=' + _value)
          })
          break;
        case 'comma':
          // 结果: ids=1,2,3
          let commaStr = "";
          value.forEach(_value => {
            commaStr += (commaStr ? "," : "") + _value;
          })
          _result.push(key + '=' + commaStr)
          break;
        default:
          value.forEach(_value => {
            _result.push(key + '[]=' + _value)
          })
      }
    } else {
      _result.push(key + '=' + value)
    }
  }
  return _result.length ? prefix + _result.join('&') : ''
}

// 根据参数名获取地址栏后面对应的参数
export function getUrlParms(name: string) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null)
    return unescape(r[2]);
  return null;
}

// 根据参数获取指定路径后面对应的参数
export function getPointUrlParam(url: string, name: string) {
  try {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = url.split('?')[1].match(reg);
    if (r != null) {
      return r[2];
    }
    return "";//如果此处只写return;则返回的是undefined
  } catch (e) {
    return "";//如果此处只写return;则返回的是undefined
  }
};