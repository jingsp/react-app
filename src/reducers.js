// 将reducer文件整合
import { combineReducers } from "redux";
import wxData from "./reducer/wx.reducer";
export default combineReducers({
  wxData
});
