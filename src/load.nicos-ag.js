module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.nicos-ag',
    'dct:alternative': '@fua/resource.data.organization/nicos-ag',
    'dct:requires':    [{
        'dct:identifier': '../data/nicos-ag.ttl',
        'dct:format':     'text/turtle'
    }]
};
