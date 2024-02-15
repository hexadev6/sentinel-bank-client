import { useContext } from "react";
import { DarkModeContext } from "../components/Provider/DarkProvider";

const useDarkMode = () => {
  const theme = useContext(DarkModeContext);
  return theme;
};

export default useDarkMode;
