'use strict'

const request = require('./utils/request');

const createNewDictionary = (url, data) => {
    try {
        return request.post(url, data).then(response => { return response });
    } catch (error) {
        console.error(error);
    }
}

const createModifyKeyValue = (url) => {
    try {
        return request.post(url).then(response => { return response });
    } catch (error) {
        console.error(error);
    }
}

const deleteDictionary = (url) => {
    try {
        return request.delete(url);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createNewDictionary: createNewDictionary,
    createModifyKeyValue: createModifyKeyValue,
    deleteDictionary: deleteDictionary
}