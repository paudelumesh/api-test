const { createNewDictionary, deleteDictionary, createModifyKeyValue } = require('service');

const getNewDictionary = () => {
  //console.log(createNewDictionary('/dictionary', {}));
  return createNewDictionary('/dictionary', {}).then(newDict => {
    return newDict;
  });
}

const modifyKeyValue = () => {
  return createModifyKeyValue('dictionary/f860b33e-4037-486c-866e-5485c273ad61/keys/Key1?id=f860b33e-4037-486c-866e-5485c273ad61&key=Key1');
}

const removeDictionary = () => {
  return deleteDictionary('/dictionary/af64bda0-e827-4b34-9435-cc1ba682f5bf');
}

// exports.getNewDictionary = getNewDictionary;
module.exports = {
  getNewDictionary: getNewDictionary,
  modifyKeyValue: modifyKeyValue,
  deleteDictionary: removeDictionary
}