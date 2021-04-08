
export let code = "td {\n  padding-right: 3rem;\n}\n@media (max-width: 600px) {\n  td {\n    font-size: 1.5rem;\n  }\n}\ntd:first-child {\n  color: var(--color-text-light);\n}\ntd:last-child {\n  font-weight: 600;\n}";
let json = {};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}