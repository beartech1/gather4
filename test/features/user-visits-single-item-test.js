const {assert} = require('chai');
const {buildItemObject, parseTextFromHTML} = require('../test-utils');

describe('User visits create page', () => {
	describe('fills it out', () => {
		it('submits a new item', () => {
			const itemToCreate = buildItemObject();
			browser.url('/items/create');
			browser.setValue('#title-input', itemToCreate.title);
			browser.setValue('#description-input', itemToCreate.description);
			browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
			browser.click('#submit-button');
			
			browser.click('.item-card a');
			
			assert.include(browser.getText('body'), itemToCreate.description);
		});
	});
});