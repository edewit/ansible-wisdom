describe('Navigate to the Seats Administration page as lightspeed-test-user-2', () => {
  beforeEach(() => {
    cy.login('lightspeed-test-user-2');
  });

  it('passes', () => {
    cy.get('.pf-c-title', { timeout: 30000 }).as('title');
    cy.get('@title').should('include.text', 'Ansible Lightspeed with IBM watsonx Code Assistant');
    cy.get('.pf-l-level > div > p').should('include.text', 'This group contains all users assigned seats within your organization.');
  })

  it('sorting', () => {
    cy.mockUsers(30)
    cy.get('.pf-c-title', { timeout: 30000 }).as('title');
    cy.get('@title').should('include.text', 'Ansible Lightspeed with IBM watsonx Code Assistant');
    cy.get(':nth-child(2) > .pf-c-table__button').click()
    cy.sorting('[data-cy="users-table"] tbody [data-label="Username"]', 'asc');
    cy.get(':nth-child(2) > .pf-c-table__button').click()
    cy.sorting('[data-cy="users-table"] tbody [data-label="Username"]', 'des');


  })

  it('pagination', () => {
    cy.mockUsers(50)
    cy.get('.pf-c-title', { timeout: 30000 }).as('title');
    cy.get('@title').should('include.text', 'Ansible Lightspeed with IBM watsonx Code Assistant');
    cy.pagination();


  })
})