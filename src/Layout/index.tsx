import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const MainBox = styled.main`
  background: var(--themeBgColor);
  min-height: calc(100vh - 120px);
`
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <MainBox>{children}</MainBox>
      <Footer />
    </div>
  )
}

export default Layout;