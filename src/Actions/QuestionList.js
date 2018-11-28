import { listAllQuestionsAPI } from "./../Services/APIService";

import { hasErrored, isLoading } from "./CommonActions";

export function questionsListFetchSuccess(items) {
    return { type: "QUESTIONS_LIST_FETCH_DATA_SUCCESS", items };
}

export function fetchQuestionsList() {
    return dispatch => {
        dispatch(isLoading(true));
        dispatch(hasErrored(false));

        listAllQuestionsAPI()
            .then(response => {
                dispatch(hasErrored(false));
                dispatch(isLoading(false));
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(questionsListFetchSuccess(items)))
            .catch(() => {
                dispatch(isLoading(false));
                dispatch(hasErrored(true));
            });
    };
}
