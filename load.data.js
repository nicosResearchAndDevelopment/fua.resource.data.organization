module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.data',
    'dct:alternative': '@nrd/fua.resource.data',
    'dct:requires':    [{
        'dct:identifier': './organizations/load.organizations.js',
        'dct:format':     'application/fua.load+js'
    }, {
        'dct:identifier': './persons/load.persons.js',
        'dct:format':     'application/fua.load+js'
    }]
};
