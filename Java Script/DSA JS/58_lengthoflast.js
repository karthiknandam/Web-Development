var lengthOfLastWord = function(s) {
    // Trim any trailing spaces
    s = s.trim();
    
    // Find the last word by splitting the string by spaces
    const words = s.split(" ");
    
    // Return the length of the last word
    return words[words.length - 1].length;
};
