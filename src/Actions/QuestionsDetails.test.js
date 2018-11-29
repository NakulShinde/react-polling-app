import {questionDetailsFetchSuccess} from './QuestionsDetails';

it("QuestionsDetails valid questionDetailsFetchSuccess action", () => {

    expect(questionDetailsFetchSuccess().type).toEqual("QUESTION_DETAILS_FETCH_DATA_SUCCESS");
});
