const { extractParams } = require("../utils/extractParam");
const { routeConfig } = require("./config");

async function route(req, res, path, param) {
  const func = ()=> {
    res.statusCode = 403;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        message: "Not Found",
      }),
    );
    return;
  }
  if(!path[0]) return func();
  console.log(path[0]);
  console.log(req.method);
  if(!routeConfig[path[0]]) return func();
  const f = routeConfig[path[0]][req.method.toLowerCase()];
  if (!f) return func();

  f(req, res, extractParams(param));
}
module.exports = { route };