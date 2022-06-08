import * as React from "react";
import NurseIcon from "../../images/nurse.png";
import MonitorIcon from "../../images/monitor.png";
import FogueteIcon from "../../images/foguete.png";
import "./principal.css";

export default function Facts() {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <div className="general-section">
        <div
          style={{
            backgroundColor: "#FBF7E6",
            textAlign: "center",
            paddingBottom: "15px",
            fontSize: "20px",
          }}
        >
          <h1>3 Facts About Me</h1>
        </div>
        <div className="section-facts">
          <div
            style={{
              backgroundColor: "#FBF7E6",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignContent: "center",
              margin: "0px",
              padding: "0px",
            }}
          >
            <div>
              <img
                src={NurseIcon}
                alt=""
                className="icons-config"
                style={{ marginLeft: "25px" }}
              />
              <h5 style={{ fontSize: "18px" }}>
                I worked as a nurse <br />
                until April of 2019
              </h5>
            </div>

            <div>
              <img
                src={MonitorIcon}
                alt=""
                className="icons-config"
                style={{ marginLeft: "25px" }}
              />
              <h5 style={{ fontSize: "18px" }}>
                Today I'm an intern at <br />a software factory
              </h5>
            </div>

            <div>
              <img
                src={FogueteIcon}
                alt=""
                className="icons-config"
                style={{ marginLeft: "25px" }}
              />
              <h5 style={{ fontSize: "18px" }}>
                Working hard to be a<br />
                fullstack developer
                <br />
                in the future
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
