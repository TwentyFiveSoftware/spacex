
export let code = "._container_17ce2_1 {\n  border: 1px solid var(--color-accent);\n  border-radius: 1rem;\n  padding: 1rem 1.3rem;\n  margin: 2rem 0;\n  cursor: pointer;\n}\n@media (max-width: 1200px) {\n  ._container_17ce2_1 {\n    margin: 0;\n    height: max-content;\n    border-color: var(--color-sidebar-decoration);\n  }\n}\n\n._containerInactive_17ce2_16 {\n  border: 1px solid var(--color-sidebar-decoration);\n  border-radius: 1rem;\n  padding: 1rem 1.3rem;\n  margin: 2rem 0;\n  cursor: pointer;\n}\n@media (max-width: 1200px) {\n  ._containerInactive_17ce2_16 {\n    margin: 0;\n    height: max-content;\n  }\n}\n\n._flightNumber_17ce2_30 {\n  font-size: 1.4rem;\n  color: var(--color-sidebar-text);\n  margin: 0;\n}\n\n._name_17ce2_36 {\n  font-size: 1.8rem;\n  color: var(--color-text-white);\n  line-height: 1.5rem;\n  margin: 0 0 0.7rem 0;\n}\n\n._flexRow_17ce2_43 {\n  display: flex;\n  padding-left: 1rem;\n  color: var(--color-sidebar-text);\n}\n._flexRow_17ce2_43 p {\n  font-size: 1.4rem;\n  color: var(--color-sidebar-text);\n}\n\n._spacer_17ce2_53 {\n  padding: 0 1.2rem;\n  font-size: 1rem;\n  color: var(--color-sidebar-decoration) !important;\n}";
let json = {"container":"_container_17ce2_1","containerInactive":"_containerInactive_17ce2_16","flightNumber":"_flightNumber_17ce2_30","name":"_name_17ce2_36","flexRow":"_flexRow_17ce2_43","spacer":"_spacer_17ce2_53"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}