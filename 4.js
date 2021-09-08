let words = "AKU SUKA MAKAN NASI PADANG";
let wordArray = words.split(' ').map(v => v);
let newArray = [];

let ascWord = ''
let descWord = ''

for(let i = 0; i < wordArray.length; i++) {
    ascWord += wordArray[i] + " ";
    newArray.push(ascWord)
}

for(let j = wordArray.length; j > 0; j--) {
    descWord += wordArray[j-1] + " ";
    newArray.push(descWord)
}

console.log(newArray)