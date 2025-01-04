function isEligibleToVote(age) {
    if(age > 18) {
        console.log("Eligible to vote")
    } else {
        console.log(" Not eligible to vote")
    }
}

console.log(isEligibleToVote(20)) // Eligible to vote
console.log(isEligibleToVote(18)) // Eligible to vote
console.log(isEligibleToVote(17)) // Not eligible to vote