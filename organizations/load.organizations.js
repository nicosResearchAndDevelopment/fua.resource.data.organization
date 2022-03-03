const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.organizations.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.organizations',
    'dct:alternative': '@nrd/fua.resource.data/organizations',
    'dct:requires':    [{
        'dct:identifier': './nicos-ag/load.nicos-ag.js',
        'dct:format':     'application/fua.load+js'
    }]
};
