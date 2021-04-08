
export let code = "._container_12xr6_1 {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  overflow: hidden;\n}\n@media (max-width: 1200px) {\n  ._container_12xr6_1 {\n    display: block;\n  }\n}";
let json = {"container":"_container_12xr6_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}