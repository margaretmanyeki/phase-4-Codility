function mergeStr(str1,str2){
    //declare variable to store long str length 
    let maxLen = 0;
    //initialize variable 
    let matchStr ="";
    //loop through all substrings of str1
    for(let i =0; i<str1.length; i++){
        //second loop to compare substrings of str2
        for (let i =0; i<str2.length; i++){
//check if a substring match is found between them
            let compStr = str1.substr(i);
            if (compStr === str2.substr(0,compStr.length)){
                //check the current substring match has a longer length than the previous one
                if(compStr.length>maxLen){
                    maxLen = compStr.length; matchStr = compStr;
                }
            }
        }
    }
        //combine both strings using the longest overlapping pattern
        return `${str1}${str2.replace(matchStr,'')}`;
    }
 let str1 = "abcdef";
 let str2 = "ghijk";
 console.log(mergeStr(str1,str2));