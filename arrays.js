/*NO.1 Find the last element of the following arrays.
arr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]
*/
let arr1 = [3,7,34,90,12];
console.log('last element',arr1[arr1.length-1]);

let arr2 = [true, "green", "where",12,56];
console.log('last element',arr2[arr2.length-1])

/* NO.2 Join the following array elements into a string
myPets = ["Cow", "Bird", "Snake", "Dog"]*/
let myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log('string:',myPets.join(','))

/*NO.3 sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ]*/
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort((x,y) => x-y);
console.log('ascending order:',arr3);
arr3.sort((x,y) => y-x);
console.log('descending order:',arr3);

/* NO.4 remove duplicates from the following array.
Console the array without duplicates.
console another array that only contains the duplicates
var arr = ["apple", "mango", "apple","orange", "mango", "mango"];*/
let arr = ["apple", "mango", "apple","orange", "mango", "mango"];
let arrUnique = []
let arrDups = []
arr.forEach(fruit  => {
    if(!arrUnique.includes(fruit)){
        arrUnique.push(fruit);
        
    } else{
        arrDups.push(fruit);
    }
    
});
console.log({arrUnique})
console.log({arrDups})

/* NO.5 search for the following word in the array."way"
If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4];*/
let arr5 = ["the", "way", "x", 4];
arr5.forEach(word => {
    if(word==='way'){
        console.log(word)
    } else{
        console.log('the search word was not found')
    }
})

/*NO.6 sort the following string:let word = "sevink"*/

let word = "sevink";
let word2 = word.split('').sort();
console.log('sorted_Word:',word2.join(''));




