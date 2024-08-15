import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { MikroORM } from "@mikro-orm/sqlite";
import config from "./mikro-orm.config";

const app = new Elysia().use(cors()).get("/", () => "Hello Elysia").listen(3000);
const orm = await MikroORM.init(config);

console.log(
	`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
