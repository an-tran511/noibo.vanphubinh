import { treaty } from "@elysiajs/eden";
import { type App } from "server";

export const api = treaty<App>("http://localhost:3000/api");
