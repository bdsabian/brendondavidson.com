export const breakpoints = {
  xl: { min: "80rem" },
  lg: {
    min: "64rem",
    max: "80rem"
  },
  md: {
    min: "48rem",
    max: "64rem"
  },
  sm: {
    min: "35.5rem",
    max: "48rem"
  },
  xs: { max: "35.5rem" }
};

export const mediaQueries = {
  xs: `@media (max-width: ${breakpoints.xs.max})`,
  sm: `@media (min-width: ${breakpoints.sm.min}) and (max-width: ${breakpoints.sm.max})`,
  smUp: `@media (min-width: ${breakpoints.sm.min})`,
  md: `@media (min-width: ${breakpoints.md.min}) and (max-width: ${breakpoints.md.max})`,
  mdUp: `@media (min-width: ${breakpoints.md.min})`,
  lg: `@media (min-width: ${breakpoints.lg.min}) and (max-width: ${breakpoints.lg.max})`,
  lgUp: `@media (min-width: ${breakpoints.lg.min})`,
  xl: `@media (min-width: ${breakpoints.xl.min})`
};

export default mediaQueries;
