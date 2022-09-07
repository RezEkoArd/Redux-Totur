const initialState = {
    posts: [],
    isLoading: false,
    isError: null
}

// buat triggernya untuk reducer
export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'posts_request':
            return {...state, isLoading: true}
        case 'posts_success': 
            return {...state, isLoading: false, posts: action.payload}
        case 'posts_error': 
            return {...state, isLoading: false, isError: action.payload}    
        default:
            return state;
    }
}

