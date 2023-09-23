import { useState } from "react";

import { useWindowContext } from "context/useWindowContext";
import { StyledLayout } from "layout/_styled-components/StyledLayout";
import Footer from "layout/Footer";
import Header from "layout/Header";
import Navigation from "layout/Navigation";

interface LayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { isSmallScreen } = useWindowContext();
  const [navVisible, setNavVisible] = useState(!isSmallScreen);

  return (
    <StyledLayout navVisible={navVisible}>
      <Header navVisible={navVisible} setNavVisible={setNavVisible} />
      <Navigation navVisible={navVisible} />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
