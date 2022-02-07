const
    {describe, test} = require('mocha'),
    expect           = require('expect'),
    {loadDataFiles}  = require('@nrd/fua.module.rdf'),
    {Dataset}        = require('@nrd/fua.module.persistence'),
    res_data         = require('@nrd/fua.resource.data');

describe('resource.universe', function () {

    this.timeout(0);

    test('should load universe with rdf-module', async function () {
        const dataFiles = await loadDataFiles(res_data);
        expect(dataFiles.length).toBeGreaterThan(0);

        const dataData = new Dataset();
        dataFiles
            .map(({dataset}) => dataset)
            .filter(dataset => dataset)
            .forEach(dataset => dataData.add(dataset));
        expect(dataData.size).toBeGreaterThan(0);

        console.log('quads:', dataData.size);
        debugger;
    });

});
