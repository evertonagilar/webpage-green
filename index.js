// Cria um mini servidor e retorna a página index.html

const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');
const hostname = os.hostname;
const port = 8080;

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(path.join(__dirname, 'index.html'), 'UTF-8', (err, content) => {
        const html = content.replace('{{hostname}}', hostname);
        response.end(html, 'UTF-8');
    })
});

server.listen(port, hostname, () => {
    console.log(`Servidor escutando em http://${hostname}:${port}`);
})

// manipulador para o sinal SIGINT (Ctrl + C)
process.on('SIGINT', () => {
    console.log('Recebido o sinal SIGINT (Ctrl + C). Finalizando o servidor.');
    server.close(() => {
        console.log('Servidor encerrado.');
        process.exit(0);
    });
});