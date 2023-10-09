describe('Navigate to the Seats Administration page as lightspeed-test-user-2', () => {
  beforeEach(() => {
    cy.login('lightspeed-test-user-2');
  });

  it('passes', () => {
    cy.get('.pf-c-title').as('title');
    cy.get('@title').should('include.text', 'Ansible Lightspeed with IBM watsonx Code Assistant');
    cy.get('.pf-l-level > div > p').should('include.text', 'This group contains all users assigned seats within your organization.');
  })

  it('sorting', () => {
    const dataList = new Array;
    const allowed = 30
    for (var i = 0; i < allowed; i++) {
      dataList[i] = {
        "account_username": "lightspeed-test-user-" + i,
        "first_name": "Test" + i,
        "last_name": "Test" + i,
        "status": "Active",
      }
    }

    cy.intercept('GET', '/api/entitlements/v1/seats?status=Active*', {
      allowed: allowed,
      consumed: 30,
      meta: { count: 30 },
      data: dataList
    }).as('mockUsers');
    cy.wait('@mockUsers')

    cy.get('.pf-c-title').as('title');
    cy.get('@title').should('include.text', 'Ansible Lightspeed with IBM watsonx Code Assistant');
    cy.get(':nth-child(2) > .pf-c-table__button').click()
    cy.sorting('[data-cy="users-table"] tbody [data-label="Username"]', 'asc');
    cy.get(':nth-child(2) > .pf-c-table__button').click()
    cy.sorting('[data-cy="users-table"] tbody [data-label="Username"]', 'des');


  })
})