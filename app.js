                // 1. return the longest string in the sentence.

function findLongWord(str){
    if(str.trim().length === 0) return false
    
    let words = str.split(" ");
    words.sort((a,b) => a.length - b.length)
    console.log(words.at(-1));
    
    return words[words.length-1]
}



const result = findLongWord('Java Script is a programing language');
console.log(result);


