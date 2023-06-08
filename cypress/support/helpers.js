export function stringGen(len, purpose) {
  let text = "";

  const charset = "ABCdeFgHijklmNoPqrsTuVwXyZ";
  for (let i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return purpose == 'name' ? text : text.concat("0!")
}

export function acceptCookies() {
  cy.get('[data-accept-action="selected"]').click()
}

export function getIntPrice(price) {
  return parseFloat(price.match(/^\d{1,3}(?:\.\d{3})?(?:,\d{2})$/))
}

