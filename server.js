const app = require('./src/app')
const http = require('http')
const connect = require('./src/db/db')

connect();


const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});
