// store a value in array 

// const sanwich = ["peanut butteer" , "jelly", "bread"]
// console.log(sanwich);

// myArray should be an array.
// The first item in myArray should be a string.
// The second item in myArray should be a number.

// let myArray = ["sanwich", 5];



// nest one array within another array 


// const iplteams = [["csk",14, ["Ar"]], ["rcb", 12], "umpire"]


// iplteams[2]= ["KKR", 10]
// console.log(iplteams);



const arr = [
    [1,2,3], //0
    [4,5,6],
    [7,8,9],
    [[10,11,12],13,14]
];


console.log(arr[2][2]);

console.log(arr[3][1]);

let arraysize = arr.length;


console.log(arraysize);


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);



console.log(myChildren);


