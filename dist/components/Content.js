import React, {useContext} from "../../_snowpack/pkg/react.js";
import styles from "../styles/Content.module.css.proxy.js";
import {LaunchesContext} from "../App.js";
import InfoContainer from "./InfoContainer.js";
import DataTable from "./DataTable.js";
import GroupWrapper from "./GroupWrapper.js";
const DATE_TIME_FORMAT = Intl.DateTimeFormat("de", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});
const Content = ({launchIndex}) => {
  const launches = useContext(LaunchesContext);
  if (launches.length <= launchIndex)
    return null;
  const launch = launches[launchIndex];
  return /* @__PURE__ */ React.createElement("main", {
    className: styles.container
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.date
  }, DATE_TIME_FORMAT.format(new Date(launch.date_unix * 1e3))), /* @__PURE__ */ React.createElement("span", {
    className: styles.flightNumber
  }, "#", launch.flight_number), /* @__PURE__ */ React.createElement("h1", {
    className: styles.launchName
  }, launch.name), /* @__PURE__ */ React.createElement("p", {
    className: styles.details
  }, launch.details), /* @__PURE__ */ React.createElement("div", {
    className: styles.info
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.column
  }, /* @__PURE__ */ React.createElement(InfoContainer, {
    title: "ROCKET",
    text: launch.rocket.description
  }, /* @__PURE__ */ React.createElement(DataTable, {
    content: [
      {name: "Name", value: launch.rocket.name},
      {name: "Stages", value: launch.rocket.stages},
      {name: "Height", value: `${launch.rocket.height.meters} m`},
      {
        name: "Cost per launch",
        value: new Intl.NumberFormat("en", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0
        }).format(launch.rocket.cost_per_launch)
      }
    ]
  })), /* @__PURE__ */ React.createElement(InfoContainer, {
    title: "CORES / LANDING"
  }, launch.cores.map((core, index) => /* @__PURE__ */ React.createElement(GroupWrapper, {
    key: index
  }, /* @__PURE__ */ React.createElement("h3", {
    className: styles.subtitle
  }, "CORE #", index + 1), /* @__PURE__ */ React.createElement(DataTable, {
    content: [
      {name: "Flight", value: core.flight},
      {
        name: "Landing attempt",
        value: core.landing_attempt === null ? "---" : core.landing_attempt ? "Yes" : "No"
      },
      {name: "Landing type", value: core.landing_type}
    ]
  }), /* @__PURE__ */ React.createElement("h3", {
    className: styles.subtitle
  }, "LANDPAD"), core.landpad === null ? "---" : /* @__PURE__ */ React.createElement(DataTable, {
    content: [
      {name: "Name", value: core.landpad.name},
      {name: "Full name", value: core.landpad.full_name},
      {name: "Type", value: core.landpad.type},
      {name: "Locality", value: core.landpad.locality},
      {name: "Region", value: core.landpad.region}
    ]
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: styles.column
  }, /* @__PURE__ */ React.createElement(InfoContainer, {
    title: "PAYLOAD"
  }, launch.payloads.map((payload, index) => /* @__PURE__ */ React.createElement(GroupWrapper, {
    key: index
  }, /* @__PURE__ */ React.createElement(DataTable, {
    content: [
      {name: "Name", value: payload.name},
      {name: "Type", value: payload.type},
      {name: "Customers", value: payload.customers.join(", ")},
      {name: "Manufacturers", value: payload.manufacturers.join(", ")},
      {
        name: "Mass",
        value: payload.mass_kg ? `${new Intl.NumberFormat("de").format(payload.mass_kg)} kg` : "---"
      },
      {name: "Orbit", value: `${payload.orbit} (${payload.regime})`}
    ]
  })))), /* @__PURE__ */ React.createElement(InfoContainer, {
    title: "LAUNCHPAD",
    text: launch.launchpad.details
  }, /* @__PURE__ */ React.createElement(DataTable, {
    content: [
      {name: "Name", value: launch.launchpad.name},
      {name: "Full name", value: launch.launchpad.full_name},
      {name: "Locality", value: launch.launchpad.locality},
      {name: "Region", value: launch.launchpad.region}
    ]
  })))));
};
export default Content;
