const { createServer } = require("http");

const { default: next } = require("next");

const port = Number(process.env.PORT ?? "3000");
const isProduction = process.env.NODE_ENV === "production";

const app = next({
  dev: !isProduction,  
});

const handleRequest = app.getRequestHandler();

const run = async () => {
  await app.prepare();

  const server = createServer((req, res) => {
    const protocol = req.headers["x-forwarded-proto"] ?? "http";

    const url = new URL(req.url, `${protocol}://${req.headers.host}`);

    if (isProduction && url.protocol === "http:") {
      const newUrl = new URL(String(url));

      newUrl.protocol = "https:";

      res.writeHead(302, {
        Location: String(newUrl),
      });

      res.end();

      return;
    }

    handleRequest(req, res);
  });

  await new Promise((resolve) => {
    server.listen(port, resolve);
  });

  console.log(`> Ready on http://localhost:${port}`);
};

run().catch((error) => {
  console.error(error);

  process.exit(-1);
});
