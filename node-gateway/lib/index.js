const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { createProxyMiddleware } = require("http-proxy-middleware");
const { defaultMiddleware, defaulAppListen } = require("./functions");

const gatewayMiddleware = (config) => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  const api_config = config.api_configurations;
  const sever_config = config.sever_configurations;
  const appListen = sever_config.app_listen_callback || defaulAppListen;

  for (let x = 0; x < api_config.length; x++) {
    const service = api_config[x];
    const apiMiddleware = service.api_middleware || defaultMiddleware;

    app.use(
      "/" + service.api_name,
      apiMiddleware,
      createProxyMiddleware({
        target: service.target_service_url, // target host with the same base path
        changeOrigin: service.changeOrigin, // needed for virtual hosted sites
      })
    );
  }

  app.listen(sever_config.sever_port, appListen(sever_config.sever_port));
};

module.exports = { gatewayMiddleware };
