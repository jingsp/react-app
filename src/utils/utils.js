// 获取url中的参数
export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let url = `http://ylhtest.adt100.com/code=11111111&state=STATE`;
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

// 页面重定向
export function redirectPage(path) {
  let appid = "wxa2b43f80deee74aa";
  const url = `http://ylhtest.adt100.com${path}`;
  console.log(url);
  console.log(window.location.href);
  if (window.location.href.includes("code")) {
    // 包含就不需要重定向  只需要获取code
    console.log(getQueryString("code"));
    return getQueryString("code");
  } else {
    // 对页面进行重定向 以便获取code
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=STATE`;
    console.log(window.location.href);
    return "";
  }
}
