export function questionDetailsData(state = {}, action) {

    switch (action.type) {
        case 'QUESTION_DETAILS_FETCH_DATA_SUCCESS':
            return {...action.item};
        default:
            return state;
    }
}