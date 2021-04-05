
export let code = "._container_35dvc_1 {\n  padding: 6rem 4rem;\n  overflow-y: scroll;\n}\n._container_35dvc_1::-webkit-scrollbar {\n  width: 0.8rem;\n}\n._container_35dvc_1::-webkit-scrollbar-track {\n  background: var(--color-text-white);\n}\n._container_35dvc_1::-webkit-scrollbar-thumb {\n  background-color: var(--color-text-light);\n  border-radius: 20px;\n  border: 0;\n}\n\n._date_35dvc_17 {\n  font-size: 5rem;\n  font-family: \"Redwing\", \"Nunito\", sans-serif;\n  color: var(--color-text-light);\n  text-align: right;\n}\n\n._flightNumber_35dvc_24 {\n  color: var(--color-text-light);\n  font-size: 2rem;\n}\n\n._launchName_35dvc_29 {\n  font-size: 4rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\n._details_35dvc_35 {\n  font-size: 1.7rem;\n}\n\n._info_35dvc_39 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 4rem;\n  margin-top: 4rem;\n}\n\n._column_35dvc_46 {\n  display: flex;\n  flex-direction: column;\n  row-gap: 4rem;\n}\n\n._subtitle_35dvc_52 {\n  margin-bottom: 0.5rem;\n}\n._subtitle_35dvc_52:not(._subtitle_35dvc_52:first-child) {\n  margin-top: 2rem;\n}";
let json = {"container":"_container_35dvc_1","date":"_date_35dvc_17","flightNumber":"_flightNumber_35dvc_24","launchName":"_launchName_35dvc_29","details":"_details_35dvc_35","info":"_info_35dvc_39","column":"_column_35dvc_46","subtitle":"_subtitle_35dvc_52"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}