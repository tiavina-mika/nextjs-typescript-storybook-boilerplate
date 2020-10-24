// import { withPaddings } from 'storybook-addon-paddings';
import { ThemeProvider } from 'react-jss';
import { theme } from '../pages/_app';

const viewports = {
  galaxyS5: {
    name: 'galaxy S5',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  pixel2: {
    name: 'pixel 2',
    styles: {
      width: '411px',
      height: '731px',
    },
  },
  pixel2XL: {
    name: 'pixel 2 XL',
    styles: {
      width: '411px',
      height: '823px',
    },
  },
  iphone678: {
    name: 'iphone 6/7/8',
    styles: {
      width: '414px',
      height: '736px',
    },
  },
  iphoneX: {
    name: 'iphone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  ipad: {
    name: 'ipad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  tabletLarg: {
    name: 'tablet Larg',
    styles: {
      width: '960px',
      height: '768px',
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1200px',
      height: '1024px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports,
    defaultViewport: 'iphone678',
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
  ),
];
