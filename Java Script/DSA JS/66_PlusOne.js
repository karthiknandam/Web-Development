var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 !== 10) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }    
};


// My code 

const incrementDigits = (digits) => {
    const res = String(Number(digits.join('')) + 1);
    return Array.from(res, Number);
};
