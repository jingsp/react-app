import React from "react";
import { Carousel, WingBlank } from "antd-mobile";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { getOpenid } from "../../reducer/wx.reducer";
import { redirectPage } from "../../utils/utils";
import { getBannerList } from "./index.request";
import "./index.scss";
@connect(state => state.wxData, { getOpenid })
class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      bannerList: [],
      imgHeight: 140
    };
  }
  componentWillMount() {
    //   判断是否有微信openid
    // console.log(this.props);
    const path = this.props.match.path;
    if (!this.props.openid) {
      let code = redirectPage(path);
      if (code) {
        this.props.getOpenid(code);
      }
    } else {
      getBannerList().then(res => {
        this.setState({ bannerList: res.list });
      });
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="index-container">
        {this.props.openid ? (
          <div>
            <Carousel
              autoplay={true}
              infinite={true}
              dots={false}
              autoplayInterval={2000}
            >
              {this.state.bannerList.map(val => (
                <a
                  key={val}
                  href={val.url}
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: this.state.imgHeight
                  }}
                >
                  <img
                    src={val.imgUrl}
                    alt=""
                    style={{ width: "100%", verticalAlign: "top" }}
                    // onLoad={() => {
                    //   // fire window resize event to change height
                    //   window.dispatchEvent(new Event("resize"));
                    //   // this.setState({ imgHeight: "auto" });
                    // }}
                  />
                </a>
              ))}
            </Carousel>
          </div>
        ) : (
          ""
        )}
        <div className="brand-wrapper">
          <h4>热门商家</h4>
          <div className="scroll-wrapper">
            <ul className="logo-list">
              <li className="logo-item">1111</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
