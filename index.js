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

//reduce

const reducedNums = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const reducedPana = panagram.reduce((accumulator, currentValue) => accumulator + currentValue, '');


console.log(reducedNums);
console.log(reducedPana);

//sort 

const sortedNums = nums.sort();

console.log(sortedNums);

const sortedPana = panagram.sort();

console.log(sortedPana);

const ascending = (a, b) => (a > b ? 1 : -1);
const decending = (a, b) => (a > b ? -1 : 1);

const decendingNums = nums.sort(decending);
console.log("Sorting numbers in decending order")
console.log(decendingNums);
const ascendingNums = nums.sort(ascending);
console.log("Sorting numbers in ascending order")
console.log(ascendingNums);
const decendingPana = panagram.sort(decending);
console.log("Sorting words in decending order")
console.log(decendingPana);
const ascendingPana = panagram.sort(ascending);
console.log("Sorting words in ascending order")
console.log(ascendingPana);


const panagram1 = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

function isPanagram(array){
    const stringedArray = array.join('').toUpperCase();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    for (let i = 0; i < alphabet.length; i++){
        if(stringedArray.indexOf(alphabet[i]) < 0){
            return false;
        }
    }
    return true;
}

console.log(isPanagram(panagram1));

//products

const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]

  const prodLessThanTen = products.filter(prods => prods.price < 10);
console.log("Filtering only products less than 10");
  console.log(prodLessThanTen);

const sortedAlphaProds = products.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1));
console.log("Sorting products in alphabetical order");
console.log(sortedAlphaProds);