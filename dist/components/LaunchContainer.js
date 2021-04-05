import React from "../../_snowpack/pkg/react.js";
import styles from "../styles/LaunchContainer.module.css.proxy.js";
const formatDate = (date) => {
  const DATE_TIME_FORMAT = Intl.DateTimeFormat("de", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
  return DATE_TIME_FORMAT.format(new Date(date * 1e3));
};
const LaunchContainer = ({
  active,
  flightNumber,
  name,
  rocketName,
  launchPadName,
  payload,
  date,
  onClick
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: active ? styles.container : styles.containerInactive,
    onClick: () => onClick()
  }, /* @__PURE__ */ React.createElement("p", {
    className: styles.flightNumber
  }, "#", flightNumber.toString()), /* @__PURE__ */ React.createElement("p", {
    className: styles.name
  }, name), /* @__PURE__ */ React.createElement("div", {
    className: styles.flexRow
  }, /* @__PURE__ */ React.createElement("p", null, formatDate(date)), /* @__PURE__ */ React.createElement("p", {
    className: styles.spacer
  }, "•"), /* @__PURE__ */ React.createElement("p", null, rocketName)), /* @__PURE__ */ React.createElement("div", {
    className: styles.flexRow
  }, /* @__PURE__ */ React.createElement("p", null, launchPadName), /* @__PURE__ */ React.createElement("p", {
    className: styles.spacer
  }, "•"), /* @__PURE__ */ React.createElement("p", null, payload)));
};
export default LaunchContainer;
