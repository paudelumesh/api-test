'use strict';

const newDictionary = { status: 201, statusText: 'Created', data: { id: "d31cd7ee-803c-41c6-ba02-ca6d0c33c407" } };

const createNewDictionary = (url, data) => {
  return Promise.resolve(newDictionary);
}

const createModifyKeyValue = (url) => {
  return Promise.resolve({ status: 200 });
}

const deleteDictionary = (url) => {
  return Promise.resolve({ status: 204 });
}

module.exports = {
  createNewDictionary: createNewDictionary,
  createModifyKeyValue: createModifyKeyValue,
  deleteDictionary: deleteDictionary
}