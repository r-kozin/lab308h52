const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog', 'thisislongerthan5chars', 'th']
//every 1 & 2
function isAboveZero(x){
    return x > 0;
}

function isLessThanEightChars(chars){
    return chars.length < 8;
}

console.log(nums.every(isAboveZero));
console.log(panagram.every(isLessThanEightChars));

//filter 1 & 2
const result = nums.filter(nums => nums < 4); //filter out numbers greater than four
const wordresult = panagram.filter(panagram => panagram.length % 2); //filter out even words... changing to === 0 leaves only the even words

console.log(result);
console.log(wordresult);


//find 1 & 2
const found = nums.find(nums => nums % 5 === 0);
const foundWord = panagram.find(panagram => panagram.length > 5);

console.log(found);
console.log(foundWord);

const divisibleByThree = (element) => element % 3 == 0;
const lessThanThreeChars = (element) => element.length < 3;


console.log(nums.findIndex(divisibleByThree));
console.log(panagram.findIndex(lessThanThreeChars));

nums.forEach(element => console.log(element*3));
panagram.forEach(element => console.log(element + '!'));

const map1 = nums.map(x => x * 100);
const map2 = panagram.map(x => x.toUpperCase());

console.log(map1);
console.log(map2);

const divBySeven = (element) => element % 7 === 0;

function doesAExist(element){
    for (let i = 0; i < element.length; i++){
            if (element[i] === "a"){
            return true;
            }
        }
    }

console.log(nums.some(divBySeven));

console.log(panagram.some(doesAExist));