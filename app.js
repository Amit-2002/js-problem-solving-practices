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
