/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if(cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key , result)
        return result;
    }
}

// this fn is only used to return pure different args and also they;
// JSON.stringify is used to convert it into string;-> "[1,2]" like this;
