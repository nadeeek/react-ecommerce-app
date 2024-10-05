import ActionTypes from "./actionTypes";

// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type: ActionTypes.ADDITEM,
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:ActionTypes.DELITEM,
        payload:product
    }
}

export const login = (username, password) =>{
  if (username === "test" && password === "password") {
    return {
      type:ActionTypes.LOGIN_SUCCESS,
      payload: username 
    }
  }
  return {
      type:ActionTypes.LOGIN_FAIL,
  }
}
  export const register = (user) => {
    if (user.username && user.password && user.email) {
      return{ 
        type: ActionTypes.REGISTER_SUCCESS, 
        payload: user.username 
      };
    } else {
      return{
         type: ActionTypes.REGISTER_FAIL 
      };
    }
  };

  export const logout = () => {
    return {
      type:ActionTypes.LOGOUT,
    }
  };