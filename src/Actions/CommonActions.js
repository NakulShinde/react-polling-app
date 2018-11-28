
export function hasErrored(bool) {
    return {type: 'API_HAS_ERROR', hasErrored: bool};
}

export function isLoading(bool) {
    return {type: 'API_IS_LOADING', isLoading: bool};
}