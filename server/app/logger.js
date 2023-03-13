require('colors');

const iso = () => new Date(Date.now()).toISOString();
const log = (...args) => console.log(`[${iso()}]`, 'INFO:'.green, ...args);
const debug = (...args) => console.debug(`[${iso()}]`, 'DEBUG:'.blue, ...args);
const error = (...args) => console.error(`[${iso()}]`, 'ERROR:'.red, ...args);

const FILTERS = ['password', 'confirmPassword'];
const filter = (body) => {
  const filteredBody = JSON.parse(JSON.stringify(body));
  FILTERS.forEach((field) => {
    const input = filteredBody?.variables?.input;
    if (input && input[field]) filteredBody.variables.input[field] = '[FILTERED]';
  });
  return filteredBody;
};

const format = (req) => {
  const {
    method, protocol, headers, originalUrl,
  } = req;
  const fullUrl = headers.host + originalUrl;

  const body = filter(req.body);

  log(method, `${protocol}://${fullUrl}`);
  debug(body);
};

const handler = (req, _res, next) => {
  format(req);
  next();
};

module.exports = {
  iso,
  filter,
  log,
  debug,
  error,
  format,
  handler,
};
