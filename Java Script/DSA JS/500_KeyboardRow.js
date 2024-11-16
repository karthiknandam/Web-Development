function findWords(words) {
    const row1 = new Set('qwertyuiop');
    const row2 = new Set('asdfghjkl');
    const row3 = new Set('zxcvbnm');
    
    const result = [];
    
    for (const word of words) {
        const lowerCaseWord = word.toLowerCase();
        
        let row;
        if (row1.has(lowerCaseWord[0])) row = row1;
        else if (row2.has(lowerCaseWord[0])) row = row2;
        else if (row3.has(lowerCaseWord[0])) row = row3;
        
        let canTypeInOneRow = true;
        for (const char of lowerCaseWord) {
            if (!row.has(char)) {
                canTypeInOneRow = false;
                break;
            }
        }
        
        if (canTypeInOneRow) result.push(word);
    }
    
    return result;
}

