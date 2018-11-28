export const getQuestionTotalVotes = (choices) => {
    return choices.reduce((total, choice) => {
        return total + choice.votes;
    },0)
}

export const votePercentage = (vote, totalVotes) => {
    try{
        return ((vote/totalVotes)*100).toFixed(2)
    }catch(e){
        console.log(e.message);
        return 'N/A';
    }
}