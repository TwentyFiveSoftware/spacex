import React from "../../_snowpack/pkg/react.js";
import "../styles/DataTable.module.css.proxy.js";
const DataTable = ({content}) => {
  return /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tbody", null, content.map((row, index) => /* @__PURE__ */ React.createElement("tr", {
    key: index
  }, /* @__PURE__ */ React.createElement("td", null, row.name), /* @__PURE__ */ React.createElement("td", null, row.value ?? "---")))));
};
export default DataTable;
