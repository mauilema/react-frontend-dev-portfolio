import React, { Component } from "react";
import { Icon } from "@iconify/react";
import javaScriptIcon from "@iconify/icons-logos/javascript";
import youTubeIcon from "@iconify/icons-logos/youtube";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
      var polaroidPin = "images/" + this.props.sharedBasicInfo.polaroidPin;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <br />
          <br />
          <div className="row center mx-auto mb-5">

            <div className="col-md-10 center">
              <div className="col-md-10 main-content-about-me ">
                <div className="card">
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}!</span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <div id="polaroidPin">
                    <img
                      height="50px"
                      width="50px"
                      src={polaroidPin}
                      alt="Avatar placeholder"
                    />
                  </div>
                  <img
                    height="200px"
                    width="200px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={javaScriptIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={youTubeIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />

                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default About;
