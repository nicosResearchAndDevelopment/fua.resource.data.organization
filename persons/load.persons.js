module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.persons',
    'dct:alternative': '@nrd/fua.resource.data/persons',
    'dct:requires':    [{
        'dct:identifier': './person.jlangkau.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './person.spetrac.ttl',
        'dct:format':     'text/turtle'
    }]
};
