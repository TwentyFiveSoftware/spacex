
export let code = "._container_ll015_1 {\n  background: var(--color-sidebar);\n  display: grid;\n  grid-template-columns: 7rem 1fr;\n}\n\n._launchTypSelection_ll015_7 {\n  background: var(--color-sidebar-dark);\n}\n._launchTypSelection_ll015_7 p {\n  position: absolute;\n  cursor: pointer;\n  color: var(--color-sidebar-text);\n  transform: rotate(90deg);\n  top: 13.2rem;\n  left: -6rem;\n}\n._launchTypSelection_ll015_7 p:last-child {\n  top: 33rem;\n  left: -3.5rem;\n}\n._launchTypSelection_ll015_7 ._active_ll015_22 {\n  color: var(--color-text-white);\n}\n\n._launchSelection_ll015_26 {\n  height: 100vh;\n  overflow-y: scroll;\n  padding: 3rem 1.5rem 0 1.5rem;\n}\n._launchSelection_ll015_26::-webkit-scrollbar {\n  width: 0.8rem;\n}\n._launchSelection_ll015_26::-webkit-scrollbar-track {\n  background: var(--color-sidebar);\n}\n._launchSelection_ll015_26::-webkit-scrollbar-thumb {\n  background-color: var(--color-sidebar-text);\n  border-radius: 20px;\n  border: 0;\n}";
let json = {"container":"_container_ll015_1","launchTypSelection":"_launchTypSelection_ll015_7","active":"_active_ll015_22","launchSelection":"_launchSelection_ll015_26"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}