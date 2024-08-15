import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme.ts";
import "@mantine/core/styles.css";

// biome-ignore lint/style/noNonNullAssertion: this is from the Vite template
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MantineProvider theme={theme}>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
