const App = require('./app');
const api = require('./cli-api');


const app = new App(api);

app.start();