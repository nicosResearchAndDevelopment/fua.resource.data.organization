module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.data.organization',
    'dct:requires':    [{
        'dct:identifier': './load.nicos-ag.js',
        'dct:format':     'application/fua.load+js'
    }]
};
