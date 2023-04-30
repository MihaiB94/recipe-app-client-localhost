const LoginReducer = (state, action) => {
   switch (action.type) {
      case 'LOGIN_START':
         return {
            user: null,
            isFetching: true,
            error: null,
            errorMessage: null // Reset error message to null
         };

      case 'LOGIN_SUCCESS':
         return {
            user: action.payload,
            isFetching: false,
            error: null,
            errorMessage: null // Reset error message to null
         };

      case 'LOGIN_FAILURE':
         return {
            user: null,
            isFetching: false,
            error: true,
            errorMessage: action.error // Set error message to the action error
         };

      case 'LOGOUT':
         return {
            user: null,
            isFetching: false,
            error: false
         };

      case 'UPDATE_START':
         return {
            ...state,
            isFetching: true
         };

      case 'UPDATE_SUCCESS':
         return {
            user: action.payload,
            isFetching: false,
            error: false
         };

      case 'UPDATE_FAILURE':
         return {
            user: state.user,
            isFetching: false,
            error: true
         };

      case 'UPDATE_USER':
         return { ...state, user: action.payload };

      default:
         return state;
   }
};

export default LoginReducer;
