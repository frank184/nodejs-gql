// eslint-disable-next-line import/no-extraneous-dependencies
require('colors');

const logging = (req, _res, next) => {
  const {
    method, protocol, headers, originalUrl,
  } = req;
  const fullUrl = headers.host + originalUrl;

  const now = Date.now();
  const date = new Date(now);
  const iso = date.toISOString();

  console.log(`[${iso}]`, 'INFO: '.green, method, `${protocol}://${fullUrl}`);
  console.debug(`[${iso}]`, 'DEBUG:'.blue, 'body:', req.body);
  next();
};

module.exports = logging;
