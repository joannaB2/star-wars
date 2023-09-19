import { StyledLayout } from "../_styled-components/StyledLayout";
import Header from "../Header";
import Navigation from "../Navigation";

interface LayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <StyledLayout>
      <Header />
      <Navigation />
      <main>{children}</main>
      {/*  <Footer /> */}
    </StyledLayout>
  );
};

export default Layout;
