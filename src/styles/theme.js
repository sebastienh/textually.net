import { css } from "styled-components";

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
// const emSize = sizes[label] / 16
// em breakpoints based on Rebass defaults
const sizes = {
  desktop: 80,
  laptop: 64,
  tablet: 48,
  phone: 32
};

// Iterate through the sizes and create a media template
/// max-width: apply to all screen sizes equal to or narrower than _size
/// max-width: apply to all screen sizes equal to or wider than _size

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

/* Now that you've defined your media templates, you can use them like this:
const MediaThemedH1 = styled.h1`
  ${props => props.theme.media.desktop`color: ${props.theme.fifth}`};
  ${props => props.theme.media.tabletLarge`color: ${props.theme.second}`};
  ${props => props.theme.media.tabletSmall`color: ${props.theme.fourth}`};
  ${props => props.theme.media.phone`color: ${props.theme.main}`};
`;
*/

// Pass media template via theme object and Styled Components ThemeProvider
const theme = {
  main: "rgba(61, 90, 128, 1)",
  second: "rgba(152, 193, 217, 1)",
  third: "rgba(224, 251, 252, 1)",
  fourth: "rgba(238, 108, 77, 1)",
  fifth: "rgba(41, 50, 65, 1)",
  media,
};

export default theme;