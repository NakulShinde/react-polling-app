export function hasErrored(state = false, action) {
    switch (action.type) {
        case 'API_HAS_ERROR':
            return action.hasErrored;
        default:
            return state;
    }
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case 'API_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}