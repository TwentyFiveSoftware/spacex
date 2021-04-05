
export let code = "._wrapper_1iuqm_1 {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1rem max-content;\n  column-gap: 1rem;\n}\n._wrapper_1iuqm_1:not(._wrapper_1iuqm_1:last-child) {\n  margin-bottom: 2rem;\n}\n\n._left_1iuqm_11 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  opacity: 40%;\n  padding: 0.6rem 0;\n}\n\n._circle_1iuqm_19 {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  border: 0.2rem solid var(--color-text-light);\n}\n\n._line_1iuqm_26 {\n  height: 100%;\n  width: 0.2rem;\n  background-color: var(--color-text-light);\n}";
let json = {"wrapper":"_wrapper_1iuqm_1","left":"_left_1iuqm_11","circle":"_circle_1iuqm_19","line":"_line_1iuqm_26"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}