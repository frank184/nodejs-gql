require('./config');

const app = require('./app');

app.listen(global.config.app.port);

const OUTPUT = `🚀 Running a GraphQL API server
* Environment: ${global.config.env.node}
* Listening on http://${global.config.app.host}:${global.config.app.port}/graphql
Use Ctrl-C to stop
`;

console.log(OUTPUT);
