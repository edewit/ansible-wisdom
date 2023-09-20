describe('Navigate to the Seats Administration page as lightspeed-test-user-2', () => {
  before(() => {
    cy.login('lightspeed-test-user-2');
  });

  it('passes', () => {
    cy.get('.pf-c-title').as('title');
    cy.get('@title').should('include.text', 'Ansible Lightspeed with IBM watsonx Code Assistant');
    cy.get('.pf-l-level > div > p').should('include.text', 'This group contains all users assigned seats within your organization.');
  })
})