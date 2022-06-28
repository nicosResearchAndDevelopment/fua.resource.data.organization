const
    {describe, test} = require('mocha'),
    expect           = require('expect'),
    {loadDataFiles}  = require('@nrd/fua.module.rdf'),
    {Dataset}        = require('@nrd/fua.module.persistence'),
    res_context      = require('@nrd/fua.resource.data/context'),
    res_data         = require('@nrd/fua.resource.data');

describe('resource.data', function () {

    this.timeout(0);

    test('should have json context', async function () {
        expect(typeof res_context).toBe('object');
        expect(res_context.rdf).toBe('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
        expect(Object.values(res_context).every(val => typeof val === 'string')).toBeTruthy();
    });

    test('should load resource with rdf-module', async function () {
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
