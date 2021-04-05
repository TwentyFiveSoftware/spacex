import React, {createContext, useEffect, useState} from "../_snowpack/pkg/react.js";
import styles from "./styles/App.module.css.proxy.js";
import axios from "../_snowpack/pkg/axios.js";
import Content from "./components/Content.js";
import SideBar from "./components/SideBar.js";
import {PAST_LAUNCHES_REQUEST_BODY} from "./queries/past_launches.js";
import {UPCOMING_LAUNCHES_REQUEST_BODY} from "./queries/upcoming_launches.js";
const SPACEX_API_LAUNCHES_ENDPOINT = "https://api.spacexdata.com/v4/launches/query";
export const LaunchesContext = createContext([]);
const App = () => {
  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [pastLaunches, setPastLaunches] = useState([]);
  const [selectedLaunchIndex, setSelectedLaunchIndex] = useState(0);
  const [isUpcomingSelected, setIsUpcomingSelected] = useState(true);
  useEffect(() => {
    const fetchUpcomingLaunches = async () => {
      const {data} = await axios.post(SPACEX_API_LAUNCHES_ENDPOINT, UPCOMING_LAUNCHES_REQUEST_BODY, {headers: {"Content-Type": "application/json"}});
      if (!data)
        return;
      setUpcomingLaunches(data.docs);
    };
    const fetchPastLaunches = async () => {
      const {data} = await axios.post(SPACEX_API_LAUNCHES_ENDPOINT, PAST_LAUNCHES_REQUEST_BODY, {headers: {"Content-Type": "application/json"}});
      if (!data)
        return;
      setPastLaunches(data.docs);
    };
    fetchUpcomingLaunches();
    fetchPastLaunches();
  }, []);
  return /* @__PURE__ */ React.createElement(LaunchesContext.Provider, {
    value: isUpcomingSelected ? upcomingLaunches : pastLaunches
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.container
  }, /* @__PURE__ */ React.createElement(SideBar, {
    launchIndex: selectedLaunchIndex,
    onSelectLaunch: (index) => setSelectedLaunchIndex(index),
    isUpcomingSelected,
    onSelectIsUpcoming: (upcoming) => {
      setIsUpcomingSelected(upcoming);
      setSelectedLaunchIndex(0);
    }
  }), /* @__PURE__ */ React.createElement(Content, {
    launchIndex: selectedLaunchIndex
  })));
};
export default App;
