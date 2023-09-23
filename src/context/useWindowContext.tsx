import React, { useContext, useState, useEffect } from "react";

import theme from "config/styles/theme";

const WindowContext = React.createContext({ isSmallScreen: window.matchMedia(theme.device.mobileL).matches });

interface ContextProps {
  children: React.ReactNode | JSX.Element;
}

export const WindowContextProvider = ({ children }: ContextProps): JSX.Element => {
  const [smallScreen, setSmallScreen] = useState<boolean>(window.matchMedia(theme.device.mobileL).matches);

  useEffect(() => {
    window.matchMedia(theme.device.mobileL).addEventListener("change", e => {
      setSmallScreen(e.matches);
    });
  }, []);

  return <WindowContext.Provider value={{ isSmallScreen: smallScreen }}>{children}</WindowContext.Provider>;
};

export const useWindowContext = (): { isSmallScreen: boolean } => {
  const { isSmallScreen } = useContext(WindowContext);
  return { isSmallScreen };
};
