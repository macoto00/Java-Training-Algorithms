// https://www.hackerrank.com/challenges/ctci-ransom-note/problem

function checkMagazine(magazine, note) {

    const magazineWords = {}

    for (let word of magazine) {
        // magazineWords[word] = (magazineWords[word] || 0) + 1;
        
        if (magazineWords[word] === undefined) {
            magazineWords[word] = 1;
        } else {
            magazineWords[word] += 1;
        }
    }

    for (let word of note) {
        if (!magazineWords[word] || magazineWords[word] === 0) {
            console.log("No");
            return;
        } else {
            magazineWords[word]--
        }
    }

    console.log("Yes")

}

// test

const magazine = 'give me one grand today night';
const note = 'give one grand today';

checkMagazine(magazine, note);