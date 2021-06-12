const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mocks/data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin: ', 'http://localhost:4200');
  // res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
