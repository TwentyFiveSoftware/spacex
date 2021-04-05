
export let code = "._container_1gihy_1 {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 40rem 1fr;\n  overflow: hidden;\n}";
let json = {"container":"_container_1gihy_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}