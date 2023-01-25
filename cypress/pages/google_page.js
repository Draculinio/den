export default class GooglePage {

	goToGoogle(){
		cy.fixture('/googleIDs').then((googleIDs) => {
			cy.visit(googleIDs.url);	
		})
	}

	searchDogs(){
		cy.fixture('/googleData').then((googleData) => {
			cy.fixture('/googleIDs').then((googleIDs) => {
				cy.get(googleIDs.searchField, { timeout: 20000 }).type('dogs{enter}');
			})
		})
	}

	verifyDogsResults(){
		cy.fixture('/googleData').then((googleData) => {
			cy.fixture('/googleIDs').then((googleIDs) => {
				cy.get(googleIDs.resultLink, { timeout: 20000 }).should('be.visible').contains(googleData.searchByDog);
			})
		})
	}	
}