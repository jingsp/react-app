import axios from "axios";
import global from "../../utils/global";
export function getBannerList() {
  return new Promise((resolve, reject) => {
    axios({
      url: global.url.GET_BANNER_LIST,
      method: "get",
      params: {
        type: 1
      }
    })
      .then(r => {
        if (r.data.code === 200) {
          // console.log(r.data.data);
          resolve(r.data.data);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}
