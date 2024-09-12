const sql = require('mssql');
const http = require("http")
const { sqlConfig } = require('./src/db/config');
const { route } = require('./src/router/route');

require("dotenv").config();

(async () => {
  try {
    console.log(sqlConfig);
    await sql.connect(sqlConfig)
  } catch (err) {
    if (err instanceof Error) {
      throw err
      
    }else
      console.log(err);
    process.exit(0);
  }

  const hostname = "localhost";
  const port = 8080;

  const server = http.createServer((req, res) => {
    if (!req.url.startsWith("/api/v1")) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          message: "Hello World",
        }),
      );
      return;
    }

    const pathAndQuery = req.url.split("?");
    const path = pathAndQuery[0].split("/").slice(3);
    const query = pathAndQuery[1];
    console.log(path);
    route(req, res, path, query);
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
})()