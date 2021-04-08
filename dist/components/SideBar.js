import React, {useContext, useState} from "../../_snowpack/pkg/react.js";
import {LaunchesContext} from "../App.js";
import styles from "../styles/SideBar.module.css.proxy.js";
import LaunchContainer from "./LaunchContainer.js";
const SideBar = ({launchIndex, onSelectLaunch, isUpcomingSelected, onSelectIsUpcoming}) => {
  const launches = useContext(LaunchesContext);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  return /* @__PURE__ */ React.createElement("div", {
    className: sidebarVisible ? styles.sidebar : styles.sidebar__hidden
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.launchTypSelection
  }, /* @__PURE__ */ React.createElement("p", {
    onClick: () => {
      onSelectIsUpcoming(true);
      setSidebarVisible(true);
    },
    className: isUpcomingSelected ? styles.active : ""
  }, "UPCOMING LAUNCHES"), /* @__PURE__ */ React.createElement("p", {
    onClick: () => {
      onSelectIsUpcoming(false);
      setSidebarVisible(true);
    },
    className: !isUpcomingSelected ? styles.active : ""
  }, "PAST LAUNCHES")), /* @__PURE__ */ React.createElement("div", {
    className: styles.launchSelection
  }, launches.map((obj, index) => /* @__PURE__ */ React.createElement(LaunchContainer, {
    key: obj.flight_number,
    active: launchIndex === index,
    flightNumber: obj.flight_number,
    name: obj.name,
    launchPadName: obj.launchpad?.name,
    rocketName: obj.rocket?.name,
    payload: obj.payloads[0]?.type,
    date: obj.date_unix,
    onClick: () => {
      setSidebarVisible(false);
      onSelectLaunch(index);
    }
  }))));
};
export default SideBar;
