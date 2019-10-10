const CliApp = require('./lib/cli-app/cli-app');
const api = require('./lib/cli-app/cli-api');


const cliApp = new CliApp(api);

cliApp.start();