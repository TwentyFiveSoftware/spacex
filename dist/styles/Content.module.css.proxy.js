
export let code = "._container_7ptq5_1 {\n  padding: 6rem 4rem;\n  overflow-y: scroll;\n}\n@media (max-width: 1200px) {\n  ._container_7ptq5_1 {\n    margin-left: 7rem;\n    height: 100vh;\n    overflow-y: auto;\n  }\n}\n@media (max-width: 700px) {\n  ._container_7ptq5_1 {\n    padding: 3rem 1.5rem;\n  }\n}\n@media (max-width: 600px) {\n  ._container_7ptq5_1 {\n    margin-left: 5rem;\n  }\n}\n._container_7ptq5_1::-webkit-scrollbar {\n  width: 0.8rem;\n}\n._container_7ptq5_1::-webkit-scrollbar-track {\n  background: var(--color-text-white);\n}\n._container_7ptq5_1::-webkit-scrollbar-thumb {\n  background-color: var(--color-text-light);\n  border-radius: 20px;\n  border: 0;\n}\n\n._date_7ptq5_34 {\n  font-size: 5rem;\n  font-family: \"Redwing\", \"Nunito\", sans-serif;\n  color: var(--color-text-light);\n  text-align: right;\n}\n@media (max-width: 1200px) {\n  ._date_7ptq5_34 {\n    text-align: left;\n    margin-bottom: 2rem;\n  }\n}\n@media (max-width: 600px) {\n  ._date_7ptq5_34 {\n    font-size: 4rem;\n  }\n}\n\n._flightNumber_7ptq5_52 {\n  color: var(--color-text-light);\n  font-size: 2rem;\n}\n\n._launchName_7ptq5_57 {\n  font-size: 4rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n@media (max-width: 600px) {\n  ._launchName_7ptq5_57 {\n    font-size: 3rem;\n  }\n}\n\n._details_7ptq5_68 {\n  font-size: 1.7rem;\n}\n@media (max-width: 600px) {\n  ._details_7ptq5_68 {\n    font-size: 1.5rem;\n  }\n}\n\n._info_7ptq5_77 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  margin-top: 4rem;\n}\n@media (max-width: 1500px) {\n  ._info_7ptq5_77 {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  ._info_7ptq5_77 {\n    font-size: 1.5rem;\n  }\n}\n\n._column_7ptq5_94 {\n  display: flex;\n  flex-direction: column;\n  row-gap: 4rem;\n}\n\n._subtitle_7ptq5_100 {\n  margin-bottom: 0.5rem;\n}\n._subtitle_7ptq5_100:not(._subtitle_7ptq5_100:first-child) {\n  margin-top: 2rem;\n}";
let json = {"container":"_container_7ptq5_1","date":"_date_7ptq5_34","flightNumber":"_flightNumber_7ptq5_52","launchName":"_launchName_7ptq5_57","details":"_details_7ptq5_68","info":"_info_7ptq5_77","column":"_column_7ptq5_94","subtitle":"_subtitle_7ptq5_100"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}