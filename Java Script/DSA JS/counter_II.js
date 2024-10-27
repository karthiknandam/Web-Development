var createCounter = function (init) {
    let counter = init;
    return {
        increment: () => { return ++counter },
        decrement: () => { return --counter },
        reset: () => {
            counter = init;
            return counter;
        }
    }
}
