import { getQuestionDetailsAPI, voteForSelectedChoice } from "./../Services/APIService";

import { hasErrored, isLoading } from "./CommonActions";

export function questionDetailsFetchSuccess(item) {
    return { type: "QUESTION_DETAILS_FETCH_DATA_SUCCESS", item };
}

export function fetchQuestionsDetails(questionId) {
    return dispatch => {
        dispatch(isLoading(true));
        dispatch(hasErrored(false));

        getQuestionDetailsAPI(questionId)
            .then(response => {
                dispatch(hasErrored(false));
                dispatch(isLoading(false));
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(item => dispatch(questionDetailsFetchSuccess(item)))
            .catch(() => {
                dispatch(isLoading(false));
                dispatch(hasErrored(true));
            });
    };
}

export function voteForChoice(questionId, choiceId) {
    return dispatch => {
        dispatch(isLoading(true));
        dispatch(hasErrored(false));

        voteForSelectedChoice(questionId, choiceId)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(item => dispatch(fetchQuestionsDetails(questionId)))
            .catch(() => {
                dispatch(isLoading(false));
                dispatch(hasErrored(true));
            });
    };
}

