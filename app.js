                // 1. return the longest string in the sentence.

// function findLongWord(str){
//     if(str.trim().length === 0) return false
    
//     let words = str.split(" ");
//     words.sort((a,b) => a.length - b.length)
//     console.log(words.at(-1));
    
//     return words[words.length-1]
// }



// const result = findLongWord('Java Script is a programing language');
// console.log(result);



                    // 2. adding zeros to the current number, zeros should be equal to remaing digits.

// const number = 1234;
// const numArr = number.toString().split('')
// console.log(numArr);
// const len = numArr.length;

// numArr.forEach((ele, index) => {
//     zerosNum = (len - (index+1));
//     zeros = "0".repeat(zerosNum);
//     newNum = Number(ele + zeros);
//     console.log(newNum, "type : ", typeof newNum);
// })

// console.log(typeof numArr[0])



                    // 3. concat each word by making first letter capital and add # at bigning.

// function generateHash(str){
//     if (str.length > 280 || str.trim().length === 0) return false
    
//     let arr = str.split(' ');
//      str = arr.map(element => {
//         // return element.replace(element[0], element[0].toUpperCase()); 
//         return element.at(0).toUpperCase() + element.slice(1);
//     });
//     str = "#" + str.join('');
//     // return str
//     console.log(str);
// }

// console.log(generateHash("my name is amit rathore"));


// const str = 'hello';
// let arr = str.slice(1,3);
// console.log(typeof arr);



                            // 4. characters count in a string.
// function charCount(str, char){
//     str = str.trim()
//     console.log(str);
    
//     const strArr = str.split('');
//     let x = strArr.reduce((acc, cur) => {
//         if (cur === char) acc++;
//         return acc;
//     } ,0)
//     console.log(strArr);
//     return x;
// }

// console.log(charCount(' helloww ', 'l'));

//2nd way
// const characterCount = (word, char) => {
//     word = word.trim().toLowerCase();
    
//     if(word.length === 0){
//         return false
//     }

//     let count = word.split('').reduce((accum, curChar) => {
//         if (curChar === char) accum++;
//         return accum
        
//     }, 0)
//     return count;
// }
// console.log(characterCount(" HeLLow " , 'l'));





                        // 5. check tiangles sides.
// function checkTriangle(s1, s2, s3){
//     if (s1 === s2 && s2 === s3 && s3 === s1 ) return "equilateral";
//     else if (s1 === s2 || s2 === s3 || s3 === s1) return "isoscales";
//     else return "scalene"
// }

// console.log(checkTriangle(101, 100, 10));


// const triangleCheck = (x,y,z) => {
//     if (x === y && y === z) return "equilateral";
//     if (x===y || y===z ||  x===z) return 'isoscales'
//     return "scalene"
// }

// console.log(triangleCheck(203, 20, 240));



                                // 6. sort an array in assending order
// const sortArr = (arr) => {
//     arr.sort((a,b) => a-b);
//     return arr
// }
// const x = [2, 4, 1, 2, 68, 3, 5]
// console.log(sortArr(x));


                                // 7. check palindrome string 
// function isPalindrome(str){
//     str = str.replaceAll(" ", '')
//     r_str = str.split('').reverse().join('');
//     console.log(r_str);
    
//     if (r_str === str) return true
//     else return false 
    
// }
// console.log(isPalindrome("hello"))
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("js is a progamming language"))



//                         // 8. find max ele in an array
// const findMax = (arr) => {
//     max = arr.reduce((accum, currEle) => currEle > accum ? currEle : accum, 0)
//     return max;
// }
// console.log(findMax([10, 2, 40,100, 20, 39]))



                        // 9. find factorial of a number
// function findFactorial(num){
//     let fact = 1
//     for(let i=1; i<=num; i++){
//         fact = fact * i;
//     }
//     return fact
// }

// console.log(findFactorial(3));
// console.log(findFactorial(5));
// console.log(findFactorial(0));


                                // 10. average of an array
// const avg = (arr) => {
//     const sum = arr.reduce((accm, currEle) => accm + currEle , 0)
//     let avg = sum / arr.length;
//     return avg
// }

// console.log(avg([1,2,3,4,5]))



                        // 11. arrays are equal or not
// function arrEqual(arr1, arr2){
//     if (arr1.length !== arr2.length){
//         return false
//     }

    // let result = arr1.every((ele, index) => ele === arr2[index]);
    // return result;

    // arr1Str = arr1.join('');
    // arr2Str = arr2.join('');
    
    // if (arr1Str === arr2Str) return true;
    // else return false;
    
// }

// console.log(arrEqual([1,2,3], [1, 2, 4, 5, 6]));
// console.log(arrEqual([1,2,3], [1, 2, 3]));
// console.log(arrEqual([1,2,3], [1, 2, 30]));




                            // 12. find sum of all digits in number
// const findSum = (num) => {
//     const numStr = String(num).split('');
//     const numArr = numStr.map((ele) => Number(ele));
    
//     const sum = numArr.reduce((accum, ele) => accum + ele, 0);
//     return sum;
// }

// console.log(findSum(1234));



                                //  13. return unique element in an array
// const findUnique = (arr) => {
    // let unique = [];
    // for (const element of arr) {
    //     if (!(unique.includes(element))){
    //         unique.push(element)
    //     }
    // }
    // return unique;

// 2nd way:
    // const unique = arr.reduce((accum, ele) => {
    //     if (!accum.includes(ele)) accum.push(ele);
    //     return accum
    // }, [])

    // return unique;

// 3rd way:
//     const set = new Set(arr);
//     const unique = [...set];
//     return unique;
// }

// console.log(findUnique([1,2,4,5,2,4,1,10]))




                            // 14. count vowels in a string
// const countVowels = (str) => {
//     let v = 'aeiouAEIOU';

//     const total = [...str].reduce((count, letter) => {
//         if (v.includes(letter)) count += 1;
//         return count;
//     },0)

//     return total;
// }

// console.log(countVowels("brrpino"));