//If Else If Activity:
let score = prompt("Enter your score:");
score = Number(score);

if (score >= 95) {
    console.log("Your grade is: Excellent.");
} else if (score >= 85 && score < 95) {
    console.log("Your grade is: Good.");
} else if (score >= 75 && score < 85) {
    console.log("Your grade is: Fair.");
} else {
    console.log("Your grade is: Needs Improvement.");
}