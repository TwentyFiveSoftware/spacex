import React from "../../_snowpack/pkg/react.js";
import styles from "../styles/GroupWrapper.module.css.proxy.js";
const GroupWrapper = ({children}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.wrapper
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.left
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.circle
  }), /* @__PURE__ */ React.createElement("div", {
    className: styles.line
  })), /* @__PURE__ */ React.createElement("div", null, children));
};
export default GroupWrapper;
