export const logUserIn = () => ({
  type: 'VALID_LOGIN',
});

export const registerClient = (client) => ({
  type: 'REGISTER_CLIENT',
  client,
});
