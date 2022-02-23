const http = require("http");
const port = 4001;
http
  .createServer((req, res) => {
    if (req.url === "/produtos") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          produtos: [
            { nome: "celular", preco: 1000 },
            { nome: "tv", preco: 4000 },
            { nome: "notebook", preco: 10000 },
            { nome: "geladeira", preco: 3000 },
          ],
        })
      );
    } else if (req.url === "/usuarios") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          usuarios: [
            { nome: "Henrique", role: "admin" },
            { nome: "Marcos", role: "user" },
            { nome: "Cica", role: "manager" },
          ],
        })
      );
    }
  })
  .listen(port, () => console.log(`Listening on port ${port}`));
