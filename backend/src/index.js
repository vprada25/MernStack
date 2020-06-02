require('dotenv').config();
const app = require('./app');
const dabatase = require('./database');


async function main() {
   await app.listen(app.get('port'));
   console.log('server on : ', app.get('port'))

}

main();
