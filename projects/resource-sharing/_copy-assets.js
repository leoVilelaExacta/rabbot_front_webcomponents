const path = require('path');
const ncp = require('ncp').ncp;

const source = path.join(__dirname, './src/assets/');
const destination = path.join(process.cwd(), 'src', 'assets', 'resource-sharing');

ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Assets copiados com sucesso!');
});
