import axios from "axios";
import global from "../../utils/global";
export function getBannerList() {
  axios({
    url: global.url.GET_BANNER_LIST,
    method: "get",
    params: {
      type: 1
    }
  })
    .then(r => {
      if (r.code === 200) {
        this.imgList = r.data;
      }
    })
    .catch(err => {
      console.log("获取首页banner数据失败");
    });
}
