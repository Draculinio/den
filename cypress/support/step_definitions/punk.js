import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I call the punk api with beer id 192', () => {
	cy.request({
        method: 'GET',
        url: 'https://api.punkapi.com/v2/beers/192',
    }).then((resp)=>{
        Cypress.env('RESPONSE', resp)
        cy.log(Cypress.env('RESPONSE'))
        //expect(JSON.stringify(o.body[0])).to.equals(JSON.stringify(Cypress.env('PPD_policy_response')))
      })
});

Then('I expect a 200 status response', ()=>{
    expect(Cypress.env('RESPONSE').status).to.equals(200) 
})

Then('the malt is Extra Pale', ()=>{
    expect(JSON.stringify(Cypress.env('RESPONSE').body[0].ingredients.malt[0].name)).to.equals('"Extra Pale"')
})

Then('the malt value is 5.3 and the unit is kilograms', ()=>{
    let amount = JSON.stringify(Cypress.env('RESPONSE').body[0].ingredients.malt[0].amount) 
    expect(JSON.stringify(Cypress.env('RESPONSE').body[0].ingredients.malt[0].amount.value)).to.equals('5.3')
    expect(JSON.stringify(Cypress.env('RESPONSE').body[0].ingredients.malt[0].amount.unit)).to.equals('"kilograms"')
})