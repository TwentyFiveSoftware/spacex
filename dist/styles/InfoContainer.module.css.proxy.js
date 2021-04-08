
export let code = "._container_odhw1_1 {\n  padding: 1rem 1.5rem;\n  display: grid;\n  row-gap: 1rem;\n  border: 0.1rem solid var(--color-accent);\n  border-radius: 1rem;\n}\n\n._title_odhw1_9 {\n  font-size: 1.8rem;\n  color: var(--color-accent);\n  font-weight: 400;\n}\n\n._text_odhw1_15 {\n  margin-top: 0.5rem;\n}\n@media (max-width: 600px) {\n  ._text_odhw1_15 {\n    font-size: 1.5rem;\n  }\n}";
let json = {"container":"_container_odhw1_1","title":"_title_odhw1_9","text":"_text_odhw1_15"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}