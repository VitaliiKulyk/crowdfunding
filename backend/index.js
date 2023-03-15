import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";

import config from "./config";
// import db from './db';
import router from "./router";

async function start() {
  //   await db.authenticate();
  //   db.sync({ alter: true });
  //   console.log('authenticated into db');

  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(router);

  const httpServer = http.createServer({}, app);
  httpServer.listen(config.port, () =>
    console.log(`Api started on port ${config.port}`)
  );
}

start();
