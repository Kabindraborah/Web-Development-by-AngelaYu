var tweet = prompt("Compose your tweet");
var tweetCount = tweet.length;

alert("You have written "+ tweetCount + " characters. You have " + (140 - tweetCount) + " characters left.");