const initialState = {
    users: [],
    isLoading: false,
    isError: null
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'users_request':
            return {...state, isLoading: true}
        case 'users_success': 
            return {...state, isLoading: false, posts: action.payload}
        case 'users_error': 
            return {...state, isLoading: false, isError: action.payload}    
        default:
            return state;
    }
}