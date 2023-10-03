describe('Navigate to the Prod Seats Administration page as lightspeed-org-admin', () => {
  beforeEach(() => {
    cy.login('lightspeed-org-admin');
  });

  it('happy path', () => {
    cy.get('.pf-c-title.pf-m-2xl').as('title');
    cy.get('@title').should('include.text', 'Ansible Lightspeed with IBM watsonx Code Assistant');
    cy.get('.pf-l-level > div > p').should('include.text', 'This group contains all users assigned seats within your organization.');
  })

  it('filter by', () => {
    cy.get('.pf-c-title', { timeout: 30000 }).as('title');
    cy.get('[data-cy="users-table"]').as('users_table').should('be.visible')

    cy.filter_by('Username', 'lightspeed-jane-doe')
    cy.filter_by('First name', 'Jane')
    cy.filter_by('Last name', 'Doe')
  })
})


describe('Assign a seat to lightspeed-test-user-2', () => {
  before(() => {
    cy.login('lightspeed-org-admin');
  });

  after(() => {
    cy.wait(1000)
    cy.unassign_seat('lightspeed-test-user-2');
  });

  it('passes', () => {
    cy.assign_seat('lightspeed-test-user-2');
  })
})

