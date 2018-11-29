import {getQuestionTotalVotes, votePercentage, parseChoiceURL} from './Utils'

// create props to initialize
const question = {
    "url": "/questions/9",
    "published_at": "2015-05-27T21:22:26.648000+00:00",
    "question": "Favourite hot beverage?",
    "choices": [
        {
            "url": "/questions/9/choices/65",
            "votes": 246,
            "choice": "Tea"
        }, {
            "url": "/questions/9/choices/67",
            "votes": 119,
            "choice": "Apple Cider"
        }, {
            "url": "/questions/9/choices/66",
            "votes": 80,
            "choice": "Coffee"
        }, {
            "url": "/questions/9/choices/68",
            "votes": 67,
            "choice": "Hot Chocolate"
        }
    ]
}

it("validating getQuestionTotalVotes", () => {
    expect(getQuestionTotalVotes(question.choices)).toBe(512);
});

it("validating votePercentage", () => {
    expect(votePercentage(question.choices[0].votes, 512)).toBe("48.05");
    expect(votePercentage(123, 0)).toBe(0);
    expect(votePercentage(0, 1230)).toBe(0);
    expect(votePercentage(0, 0)).toBe(0);
    expect(votePercentage(-1, 10)).toBe("-10.00");
});

it("validating parseChoiceURL", () => {
    const choiceUrl = question.choices[0].url;
    const result = parseChoiceURL(choiceUrl)
    expect(result.questionId).toBe("9");
    expect(result.choiceId).toBe("65");
});