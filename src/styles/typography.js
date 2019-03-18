import Typography from "typography";
import sternGrove from "typography-theme-stern-grove";
// customize defaults
// sternGrove.baseFontSize = "22px"; // was 20px.
const typography = new Typography(sternGrove);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;