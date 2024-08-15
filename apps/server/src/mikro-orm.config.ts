import { type Options, PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

const config: Options = {
	// for simplicity, we use the SQLite database, as it's available pretty much everywhere
	driver: PostgreSqlDriver,
	// folder-based discovery setup, using common filename suffix
	entities: ["dist/**/*.model.js"],
	entitiesTs: ["src/**/*.model.ts"],
	// we will use the ts-morph reflection, an alternative to the default reflect-metadata provider
	// check the documentation for their differences: https://mikro-orm.io/docs/metadata-providers
	metadataProvider: TsMorphMetadataProvider,
	host: Bun.env.DB_HOST,
	port: Number(Bun.env.DB_PORT) || 5432,
	user: Bun.env.DB_USER,
	password: Bun.env.DB_PASSWORD,
	dbName: Bun.env.DB_DATABASE,
	driverOptions: {
		connection: { ssl: true },
	},
	// enable debug mode to log SQL queries and discovery information
	debug: true,
};

export default config;
