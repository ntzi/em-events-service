export const localConfig = {
	nodeEnv: 'local',
	api: {
		port: 3000,
	},
	logs: {
		level: 'info',
	},
	databases: {
		postgres: {
			host: 'postgres',
			port: '5432',
			username: 'admin',
			password: 'password',
			database: 'event-manager',
			migrations: ['src/api/migrations/**/*.{ts,js}'],
			entities: ['src/api/models/**/*.{ts,js}'],
			synchronize: false,
			logging: false,
		},
		redis: {
			host: 'redis',
			port: 6379,
		},
	},
	auth: {
		secretKey: process.env.JWT_SECRET || 'my-secret-key',
		expirationTime: '1d',
	},
};
