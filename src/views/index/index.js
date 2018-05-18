import React from "react";
import { Carousel, WingBlank } from "antd-mobile";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { getOpenid } from "../../reducer/wx.reducer";
import { redirectPage } from "../../utils/utils";
import { getBannerList } from "./index.request";

@connect(state => state.wxData, { getOpenid })
class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      bannerList: ["1", "2", "3"],
      imgHeight: 176
    };
  }
  componentWillMount() {
    //   判断是否有微信openid
    console.log(this.props);
    const path = this.props.match.path;
    if (!this.props.openid) {
      let code = redirectPage(path);
      if (code) {
        this.props.getOpenid(code);
      }
    } else {
      getBannerList();
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        bannerList: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      });
    }, 100);
  }

  render() {
    return (
      <div>
        {this.props.openid ? (
          <div>
            <Carousel
              autoplay={true}
              infinite={true}
              dots={false}
              autoplayInterval={2000}
              beforeChange={(from, to) =>
                console.log(`slide from ${from} to ${to}`)
              }
              afterChange={index => console.log("slide to", index)}
            >
              {this.state.bannerList.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: this.state.imgHeight
                  }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: "100%", verticalAlign: "top" }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event("resize"));
                      this.setState({ imgHeight: "auto" });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Index;
