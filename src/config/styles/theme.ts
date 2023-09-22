const defaultTheme = {
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
  },
  borderRadius: {
    small: "5px",
    medium: "10px",
    large: "15px",
    circle: "50%",
  },
};

const pallete = {
  primary: "#27343A",
  secondary: "#9EA5A8",
  orange: "#FF6800",
  red: "#FF0022",
  border: "#878787",
  text: "#000",
  yellow: "#FFE81F",
  black: "#000",
  indicator: "#ccc",
};

const theme = {
  ...pallete,
  ...defaultTheme,
};

export default theme;
