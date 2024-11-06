var cancellable = function(fn, args, t) {
    const timer = setTimeout(()=>fn(...args) , t);
    return function clearFn(){clearTimeout(timer)};
};
