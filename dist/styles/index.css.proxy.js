// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap\");\n@font-face {\n  font-family: \"Redwing\";\n  src: url(\"/dist/assets/fonts/Redwing.otf\") format(\"opentype\");\n}\n:root {\n  --color-text: #000000;\n  --color-text-light: #CCCCCC;\n  --color-text-white: #FFFFFF;\n  --color-accent: #AACB84;\n  --color-sidebar: #36393F;\n  --color-sidebar-dark: #202225;\n  --color-sidebar-text: #8E9297;\n  --color-sidebar-decoration: #474A50;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: \"Nunito\", sans-serif;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n  font-size: 1.7rem;\n  color: var(--color-text);\n}\n\nhtml {\n  font-size: 10px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}