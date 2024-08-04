const defaultMiddleware = (req, res, next) => {
  next();
};
const defaulAppListen = (port) => {
  console.log(`main gateway on Port ${port}`);
};

module.exports = {
  defaultMiddleware,
  defaulAppListen,
};
