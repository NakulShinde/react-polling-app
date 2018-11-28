import { combineReducers } from "redux";

import { hasErrored, isLoading } from "./CommonReducers";
import { questionDetailsData } from "./Question";
import { questionsListData } from "./QuestionsList";

const AllReducers = combineReducers({
  isLoading: isLoading,
  hasErrored: hasErrored,
  questionDetails: questionDetailsData,
  questionsList: questionsListData
});

export default AllReducers;
