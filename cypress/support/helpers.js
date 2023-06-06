export function stringGen(len, purpose) {
  let text = "";

  const charset = "ABCdeFgHijklmNoPqrsTuVwXyZ";
  for (let i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return purpose == 'name' ? text : text.concat("0!")
}

export function destroyRequestThatBlocksLoadEvent() {
  cy.intercept({
    method: 'POST',
    url: `${Cypress.config().baseUrl}/api/article/hotspotsTiles`
}, req => {
    req.destroy();
});
}

export function acceptCookies() {
  cy.get('[data-accept-action="selected"]').click()
}
