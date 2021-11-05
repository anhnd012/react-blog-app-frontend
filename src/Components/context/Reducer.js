export const Reducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START": 
            return {
                user: null,
                isFetching: true,
                errMessage: false
            }
        case "LOGIN_SUCCESS": 
            return {
                user: action.payload,
                isFetching: false,
                errMessage: false
            }
        case "LOGIN_FAILURE": 
            return {
                user: null,
                isFetching: false,
                errMessage: true
            }
        case "LOGOUT": 
            return {
                user: null,
                isFetching: false,
                errMessage: false,
            }
        default:
            return {...state}
    }

}