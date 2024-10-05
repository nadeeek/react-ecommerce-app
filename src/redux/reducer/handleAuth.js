const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    errorMessage: null,
  };

  const handleAuth = (state = initialState, action) => {
    // const user = action.payload;

    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                errorMessage: null,
              };
        case "LOGIN_FAIL":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
                errorMessage: 'Invalid credentials',
              };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
                errorMessage: null,
              };
        case "REGISTER_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                errorMessage: null,
              };
        case "REGISTER_FAIL":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
                errorMessage: 'Registration Failed!',
              };
    
        default:
          return state;
      }

  }

  export default handleAuth;