// import { withPaddings } from 'storybook-addon-paddings';
import { ThemeProvider } from 'react-jss';
import { theme } from '../pages/_app';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
  ),
];
