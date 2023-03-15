const config = {
  port: 3005,
  db: {
    host: process.env.DB_HOST,
    databaseName: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
};

console.log(config);

export default config;
