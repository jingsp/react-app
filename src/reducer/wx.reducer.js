import axios from "axios";
import global from "../utils/global";
// 获取openid
const GET_OPENID = "GET_OPENID";
// 获取微信jssdk
const GET_WXCONFIG = "GET_WXCONFIG";
const inistate = {
  // 打包之后删掉
  openid: "o4PZS0v9xyn_EKBODQnbd30k0OuY"
};
export default function wxData(state = inistate, action) {
  switch (action.type) {
    case GET_OPENID:
      return { ...state, openid: action.payload };
    case GET_WXCONFIG:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

function wxOpenid(data) {
  return { type: GET_OPENID, payload: data };
}

// function wxConfig(data) {
//   return { type: GET_WXCONFIG, payload: data };
// }

export function getOpenid(code) {
  return dispatch => {
    alert(2222);
    axios({
      method: "get",
      url: global.url.GET_OPENID,
      params: {
        code: code,
        appId: "wxa2b43f80deee74aa"
      }
    })
      .then(res => {
        console.log(res);
        if (res.data.code === 200) {
          dispatch(wxOpenid(res.data.data));
        }
      })
      .catch(err => {
        console.log("openid获取错误");
      });
  };
}
