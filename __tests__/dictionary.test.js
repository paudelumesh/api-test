jest.mock('../src/service');
const { getNewDictionary, deleteDictionary, modifyKeyValue } = require("../src/dictionary");

describe('Create Dictionary', () => {
    it('should create a new dictionary', async () => {
        // implementation
        const response = await getNewDictionary();

        // expects/assertions
        expect(response).toBeDefined();
        expect(response.data.id).toEqual('d31cd7ee-803c-41c6-ba02-ca6d0c33c407');
        expect(response.statusText).toEqual('Created');
        expect(response.status).toBe(201);
    });
});

describe('Create/Modify key-value pair', () => {
    // it('should create a key-value pair', async () => {

    // });

    it('should modify a key-value pair', async () => {
        const response = await modifyKeyValue();
        expect(response.status).toBe(200);
    });
});


describe('Delete a dictionary', () => {
    // console.log(deleteDictionary('/dictionary/af64bda0-e827-4b34-9435-cc1ba682f5bf?id=af64bda0-e827-4b34-9435-cc1ba682f5bf'));
    it('should delete a dictionary', async () => {
        const response = await deleteDictionary('/dictionary/af64bda0-e827-4b34-9435-cc1ba682f5bf?id=af64bda0-e827-4b34-9435-cc1ba682f5bf');
        expect(response.status).toBe(204);
    })
})