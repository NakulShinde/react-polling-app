const BASE_URL = 'https://polls.apiblueprint.org'

export const listAllQuestionsAPI = () => {
    let URL = `${BASE_URL}/questions`
    return fetch(URL)
}

export const getQuestionDetailsAPI = (question_id) => {
    let URL = `${BASE_URL}/questions/${question_id}`
    return fetch(URL)
}

export const voteForSelectedChoice= (questionId, choiceId) => {
    let URL = `${BASE_URL}/questions/${questionId}/choices/${choiceId}`
    return fetch(URL, {
        method: 'POST'
    })
}
