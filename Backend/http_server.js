const http = require('http');

const server = http.createServer((peticion, respuesta) => {
   respuesta.end('Mi primer sevidor')
})

server.listen(3000, () => console.log('server listening on port 3000'));