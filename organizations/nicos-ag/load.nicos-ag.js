const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.nicos-ag.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.nicos-ag',
    'dct:alternative': '@nrd/fua.resource.data/organizations/nicos-ag',
    'dct:requires':    [{
        'dct:identifier': './organization.nicos-ag.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './person.nicos-ag.ttl',
        'dct:format':     'text/turtle'
    }]
};
