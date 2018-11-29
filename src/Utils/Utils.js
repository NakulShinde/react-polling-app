export const getQuestionTotalVotes = (choices) => {
    return choices.reduce((total, choice) => {
        return total + choice.votes;
    },0)
}

export const votePercentage = (vote, totalVotes) => {
    try{
        return (vote == 0 || totalVotes == 0)? 0 : ((vote/totalVotes)*100).toFixed(2)
    }catch(e){
        console.log(e.message);
        return 'N/A';
    }
}

export const parseChoiceURL = (choiceURL) => {
    //hardcoding values to get from url "/questions/10/choices/71"
    //here questionId = 10 & choiceid = 71
    let choiceArr = choiceURL.split('/');
    return {
        questionId: choiceArr[2],
        choiceId: choiceArr[4]
    }
}