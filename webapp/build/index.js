// generated by sapper build at 2019-01-25T18:19:53.205Z
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.SAPPER_DEST = __dirname;
process.env.PORT = process.env.PORT || 3000;

console.log('Starting server on port ' + process.env.PORT);
require('./server.js');