Array.prototype.groupBy = function(fn) {
    const result = {};
    for(let el of this){ 
        let inp = fn(el);
        if(!result[inp])result[inp] = [];
        result[inp].push(el);
    }
    return result;
};
