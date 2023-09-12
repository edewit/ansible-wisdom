function setCookiesForUILogin() {
  Cypress.Cookies.debug(true);
  cy.setCookie('cmapi_cookie_privacy', 'permit 1,2,3', { secure: true });
  cy.setCookie('cmapi_gtm_bl', '', { secure: true });
  cy.setCookie('notice_preferences', '2:', { secure: true });
  cy.setCookie('notice_behavior', 'expressed,eu', { secure: true });
  cy.setCookie('notice_gdpr_prefs', '0,1,2:', {
    secure: true,
    domain: 'redhat.com',
  });
}

function uiLogin() {


}
