// TODO: insertar dinamicamente el puerto por default
export default `
const server = require("./src/server");

const PORT = process.env.PORT || 8001;

server.listen(PORT, () => {
  console.log(\`Micro Service listening on port \${PORT}\`);
});
`