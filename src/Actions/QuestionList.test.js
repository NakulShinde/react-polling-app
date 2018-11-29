import {questionsListFetchSuccess} from './QuestionList';

it("QuestionList valid questionsListFetchSuccess action", () => {

    expect(questionsListFetchSuccess().type).toEqual("QUESTIONS_LIST_FETCH_DATA_SUCCESS");
});
