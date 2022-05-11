const decache = require('./decache');

const l1 = require('queryai-lib');
l1.apiService.getValue();

// params: moduleName, ignoreWildflag
decache('queryai-lib', /tensorflow/);

const l2 = require('queryai-lib');
l2.apiService.getValue();
