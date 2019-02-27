module.exports = {
    bomdia: 'bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}
const http = require('http')
http.createServer((req, resp) => {
    resp.write('Bom dia');
    resp.end();
}).listen(8080)