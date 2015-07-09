var nconf = require('nconf');
var nconf_defaults = {};

nconf.argv().env().file({file:'./test.json'}).defaults({'redis-ip':'hi'});

console.log(nconf.get('Test:DeviceError:Message'));
console.log(nconf.get('redis-ip'));
