// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {

    let words = x.split(" ");
    let highestScore = 0;
    let highestScoreWord = "";

    for (let word of words) {

        let score = wordScore(word);

        if (score > highestScore) {
            highestScore = score;
            highestScoreWord = word;
        }
    }

    return highestScoreWord;

}

function wordScore(word) {

    const letters = "abcdefghijklmnopqrstuvwxyz";
    let score = 0;

    for (let letter of word) {
        score += letters.indexOf(letter) + 1;
    }

    return score;

}

// tests in Java

// @Test
// public void testHigh() {
//     String sentence1 = "abad xyz hello";
//     assertEquals("abad", HighestScoringWord.high(sentence1));

//     String sentence2 = "test programming code";
//     assertEquals("programming", HighestScoringWord.high(sentence2));
// }

// @Test
// public void testWordScore() {
//     assertEquals(8, HighestScoringWord.wordScore("abad"));
//     assertEquals(13, HighestScoringWord.wordScore("programming"));
// }