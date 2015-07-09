var nconf = require('nconf');
var _=require('underscore');
var test_config = require('./test.json');
var nconf_defaults = {};
nconf.argv().env();
_.extend(nconf_defaults, test_config);
nconf.defaults(nconf_defaults);

console.log(nconf.get('Test:DeviceError:Message'));
