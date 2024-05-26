const fs = require('fs');
const { defaultClient, statsClient } = require('./stats');
const client = require('./stats').defaultClient;
const moment = require('moment');

console.log(moment.now(), defaultClient, client);