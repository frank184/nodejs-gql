require('./config');

const app = require('./app');

app.listen(global.config.app.port);

const url = `http://${global.config.app.host}:${global.config.app.port}/graphql`;
console.log('[✔] Running a GraphQL API server at ', url);
