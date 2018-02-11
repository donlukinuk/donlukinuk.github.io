//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    //convert everything to lower case
    sampleText = txt.toLowerCase();
    //Question 1:
    q1 = sampleText.length;
    //Question 2:
    //Remove all white spaces
    oneSpace = sampleText.replace(/\s/g, " ");
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    //Splits into array
    wordsArray = oneSpace.split(/\W+/);
    //remove any blank elements
    for(index in wordsArray){
        if (wordsArray[index].length < 1){
            wordsArray.splice(index, 1);
        }
    }
    q2 = wordsArray.length;
    //return 0 if 1 element is empty
    if (wordsArray.length < 2){
        if (wordsArray[0] !== undefined && wordsArray[0].length < 1){
            q2 = 0;
        }
    }
    //question 3:
    //split on lines
    linesArray = sampleText.split(/\n/);
    //compute the number of lines
    q3 = linesArray.length;
    //be 0 if nothing exists in first line
    if (linesArray.length < 2){
        if (linesArray[0].length < 1){
            q3 = 0;
        }
    }
    //question 4:
    for (i = linesArray.length - 1; i > -1; i--){
        line = linesArray[i].replace(/\s/g,"");
        if (line.length < 1){
            linesArray.splice(i, 1);
        }
    }
    q4 = linesArray.length;
    if (linesArray.length < 2){
        if (linesArray[0] !== undefined && linesArray[0].replace(/\s/g,"").length < 1){
            q4 = 0;
        }
    }
    //question 5:
    linesArrayQ5 = sampleText.split("\n");
    q5 = 0;
    for (index in linesArrayQ5){
        if (linesArrayQ5[index].length > q5){
            q5 = linesArrayQ5[index].length;
        }
    }
    //question 6:
    lengthOfWords = 0;
    for (index in wordsArray){
        lengthOfWords += wordsArray[index].length;
    }
    q6 = lengthOfWords / wordsArray.length;
    //question 7:
    reversedArray = [];
    for (index in wordsArray){
        pal = "";
        for (x = wordsArray[index].length - 1; x >= 0; x--){
            pal += wordsArray[index][x];
        }
        reversedArray.push(pal);
    }
    q7 = [];
    for (index in wordsArray){
        if (wordsArray[index] === reversedArray[index]){
            if (wordsArray[index].length > 1 && !(wordsArray[index] in q7)){
                q7.push(wordsArray[index]);
            }
        }
    }
    //Question 8:
    sortedArray = wordsArray.concat();
    sortedArray.sort(function (a, b) {
        //sort by size and alphabetically
        return b.length - a.length || a.localeCompare(b);
    })
    q8 = [];
    for (i = 0; i < 10; i++){
        if (sortedArray.length > i){
            if(i > 0 && sortedArray[i] === q8[i-1]){
                sortedArray.splice(i,1);
                i--;
            }
            else{
                q8.push(sortedArray[i]);
            }
        }
    }
    if (q8[0] === ""){
        q8 = [];
    }
    //question 9:
    wordFreq = {};
    for (index in wordsArray){
        if(wordsArray[index] in wordFreq){
            wordFreq[wordsArray[index]] += 1;
        }
        else{
            wordFreq[wordsArray[index]] = 1;
        }
    }
    freqArray = [];
    for (value in wordFreq){
        x = {};
        x.word = value;
        x.number = wordFreq[value];
        freqArray.push(x);
    }
    freqArray.sort(function (a, b) {
        return b.number-a.number || a.word.localeCompare(b.word);
    })
    q9 = [];
    for (index in freqArray){
        if (q9.length < 10){
            endVal = freqArray[index].word + "(" + freqArray[index].number + ")";
            q9.push(endVal);
        }
    }
    if (q9[0] === "(1)"){
        q9 = [];
    }

    return {
        nChars: q1,
        nWords: q2,
        nLines: q3,
        nNonEmptyLines: q4,
        maxLineLength: q5,
        averageWordLength: q6,
        palindromes: q7,
        longestWords: q8,
        mostFrequentWords: q9
    };
}

