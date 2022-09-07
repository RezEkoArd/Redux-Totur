const posts_request = () => {
    return {
        type: 'posts_request'
    }
}

const posts_success = (data) => {
    return {
        type: 'posts_success',
        payload: data
    }
}

const posts_error = (data) => {
    return {
        type: 'posts_error',
        payload: data
    }
}

// buat function actionnya
export function GetPosts() {
    return (dispatch, getState) => {
        dispatch(posts_request())
        try {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => dispatch(posts_success(json)));
        } catch (error) {
            dispatch(posts_error(error))
        }
    }
}


export function AddPosts(data) {
    return (dispatch) => {
        dispatch(posts_request())
        try {
            fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => dispatch(posts_success(json)));
        } catch (error) {
            dispatch(posts_error(error))
        }
    }
}
