
export function questionsListData(state = [], action) {
    switch (action.type) {
        case 'QUESTIONS_LIST_FETCH_DATA_SUCCESS':

            return [...action.items];

        default:
            return state;
    }
}