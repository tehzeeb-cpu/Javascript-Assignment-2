// #1
const Users = ["Archit", "Deepankar", "Tehzeeb", "Prateek", "Bhavya"];
function SearchUser(name){
    if (Users.includes(name)){
        console.log(`Yes, ${name} is a valid user.`)
        return true;
    }
    else{
        console.log(`No, the ${name} is a not valid user.`)
        return true;
    }
}

SearchUser("Tehzeeb")
// #2
function CartValue(){
    let totalValue = 0;
    for(let i = 0; i<arguments.length; i++){
        totalValue = totalValue + arguments[i];
    }
    console.log(`The total value of the cart ${totalValue}`);
}
CartValue(100, 75, 45);
// #3
const Students = [
    {
        name: "Tehzeeb",
        marks: 95,
    },
    {
        name: "Deepankar",
        marks: 75,
    },
    {
        name: "Prateek",
        marks: 92,
    },
    {
        name: "Nadeem",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 99,
    },
];

function checkScore(name) {
    for (let student of Students) {
        if (student.name === name) {
            if (student.marks > 90) {
                console.log(`Congratulations ${student.name}! You have cleared the exam.`);
            } else {
                console.log(`Sorry! ${student.name}, you have not cleared the exam.`);
            }
            return;
        }
    }
    console.log("Invalid User !!!");
}

checkScore("Tehzeeb");
// #4
const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
];

function findMinMaxProducts(products) {
    let maxProduct = null;
    let minProduct = null;

    for (let product of products) {
        if (maxProduct === null || product.price > maxProduct.price) {
            maxProduct = product;
        }

        if (minProduct === null || product.price < minProduct.price) {
            minProduct = product;
        }
    }

    return { maxProduct, minProduct };
}

const { maxProduct, minProduct } = findMinMaxProducts(products);

console.log(`Product with the highest price: ${maxProduct.name} - Price: ${maxProduct.price}`);
console.log(`Product with the lowest price: ${minProduct.name} - Price: ${minProduct.price}`);
// #5
function createGuestListSentence(guestNames) {
    if (guestNames.length === 0) {
        return "No guests";
    }
    const guestListSentence = guestNames.join(', ');
    return `Guest list: ${guestListSentence}.`;
}
const guests = ['Alice', 'Bob', 'Charlie', 'David'];
const sentence = createGuestListSentence(guests);
console.log(sentence);
// #6
const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
  };
function printDetails(){
    let productName = productDetails.name;
    let productPrice = productDetails.price;
    let productColor = productDetails.color;
    let productMemory = productDetails.hardDisk;
    console.log("Below are the product details.");
    console.log(`name: ${productName}`);
    console.log(`price: ${productPrice}`);
    console.log(`color: ${productColor}`);
    console.log(`hardDisk: ${productMemory}`);
}
printDetails(productDetails);
// #7
function generateOTP() {
    const otp = Math.floor(Math.random() * 9000) + 1000;
    return otp;
}
const randomOTP = generateOTP();
console.log(`Generated OTP: ${randomOTP}`);
// #8
function daysUntilEvent(){
    const currentDate = new Date();
    const parsedeventStartDate = new Date(eventStartDate);
    const timeDifference = parsedeventStartDate - currentDate;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}
const eventStartDate = "2023-12-31";
// #9
function hasUniqueCharacters(username) {
    const uniqueChars = new Set();
    for (let char of username) {
        if (uniqueChars.has(char)) {
            console.log("The input string contains duplicates.");
            return false;
        }
        uniqueChars.add(char);
    }
    console.log("The input string contains only unique characters.");
    return true;
}
const username1 = "webdeveloper";
const username2 = "python";

hasUniqueCharacters(username1);
hasUniqueCharacters(username2);
// #10
function countUniqueWords(sentence) {
    const wordMap = new Map();
    const words = sentence.split(/\s+/);
    words.forEach(word => {
      const cleanedWord = word.replace(/[^\w]/g, '').toLowerCase();
      if (cleanedWord !== '') {
        if (wordMap.has(cleanedWord)) {
          wordMap.set(cleanedWord, wordMap.get(cleanedWord) + 1);
        } else {
          wordMap.set(cleanedWord, 1);
        }
      }
    });
    wordMap.forEach((count, word) => {
      console.log(`${word}: ${count}`);
    });
  }
  const sentence = "This is a simple example. This is another example.";
  countUniqueWords(sentence);
  