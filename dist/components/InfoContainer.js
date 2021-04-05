import React from "../../_snowpack/pkg/react.js";
import styles from "../styles/InfoContainer.module.css.proxy.js";
const InfoContainer = ({title, text, children}) => {
  return /* @__PURE__ */ React.createElement("section", {
    className: styles.container
  }, /* @__PURE__ */ React.createElement("h2", {
    className: styles.title
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: styles.content
  }, children), text && /* @__PURE__ */ React.createElement("p", {
    className: styles.text
  }, text));
};
export default InfoContainer;
