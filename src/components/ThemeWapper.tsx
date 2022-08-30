import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { AppState } from "../store";
import { Theme } from "../theme/type";
import dark from "../theme/dark";
import light from "../theme/light";
const ThemeWapper = ({ children }: { children: ReactNode }) => {
  const theme = useSelector((state: AppState) => state.system.theme);
  return (
    <ThemeProvider theme={theme === Theme.Dark ? dark : light}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeWapper;