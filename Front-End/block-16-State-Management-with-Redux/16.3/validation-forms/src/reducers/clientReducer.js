const INITIAL_STATE = {
  loggedIn: false,
  anyClients: false,
  registeredClients: [],
}

const clientReducer = (state = INITIAL_STATE, { type, client }) => {
  switch(type) {
    case 'REGISTER_CLIENT':
      return {
        ...state,
        anyClients: true,
        registeredClients: [...state.registeredClients, client],
      };
    case 'VALID_LOGIN':
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
}

export default clientReducer;
