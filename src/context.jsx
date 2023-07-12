import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { news } from "./data";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

const AppContext = ({ children }) => {
  const [tabs, setTabs] = useState(["Home", ...news.map((item) => item.page)]);
  const [isToggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("Home");

  return (
    <globalContext.Provider
      value={{ tabs, setTabs, isToggle, setToggle, selected, setSelected }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default AppContext;
