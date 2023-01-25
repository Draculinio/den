import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import GooglePage  from  '../../pages/google_page.js';

Given('I navigate to Google', () => {
	let google = new GooglePage()
	google.goToGoogle()
});

When('I search for dogs', () => {
	const google = new GooglePage();
	google.searchDogs();
});

Then('I expect to see results for dogs', () => {
	const google = new GooglePage();
	google.verifyDogsResults();	
});
