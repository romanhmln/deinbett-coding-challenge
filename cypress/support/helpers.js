export const TIMEOUT_HANG_ACTION = 3000;
export const TIMEOUT_EMAIL = 60000;

export function stringGen(len, purpose) {
  let text = "";

  const charset = "ABCdeFgHijklmNoPqrsTuVwXyZ";
  for (let i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return purpose == 'name' ? text : text.concat("0!")
}

