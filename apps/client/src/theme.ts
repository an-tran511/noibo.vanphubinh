import { createTheme } from "@mantine/core";

export const theme = createTheme({
	breakpoints: {
		xs: "32.5em",
		sm: "48em",
		md: "64em",
		lg: "80em",
		xl: "102.5em",
	},
	primaryColor: "blue",
	primaryShade: 9,
	defaultRadius: "md",
});
