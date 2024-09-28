class MaxBineryHeap {
    constructor(){
        this.values = [];
    }

    insert(val){
        this.values.push(val);
        this.bubble();
        return this.values;
    }
    bubble(){
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentValue = this.values[parentIdx];
            if(element <= parentValue) break;
            this.values[idx] = parentValue;
            this.values[parentIdx] = element;
            idx = parentIdx;
        }
    }
    extractMax(){
        let popElement = this.values.pop();
        let max = this.values[0]
        this.values[0] = popElement;
        this.sinkDown();
        return {
            max ,
            array : this.values
            };
    }
    sinkDown(){
        let parentIdx = 0;
        let parent = this.values[0];
        let length = this.values.length;
        while(true){
            let leftIdx = 2 * parentIdx + 1;
            let rightIdx = 2 * parentIdx + 2;
            let left , right;
            let swapIdx = null;
            if(leftIdx < length ) {
              left =  this.values[leftIdx] ;
                if(left > parent) swapIdx = leftIdx;
            }
            if(rightIdx < length ){
                right = this.values[rightIdx]
                if(
                    (swapIdx === null && right > parent) || 
                    (swapIdx !== null && right > left)
                  )
             swapIdx = rightIdx;
            }
            if(swapIdx === null) break;
            let child = this.values[swapIdx];
            this.values[swapIdx] = parent;
            this.values[parentIdx] = child;
            parentIdx = swapIdx;
        }
    }
}
const heap = new MaxBineryHeap();
heap.insert(32);
heap.insert(24);
heap.insert(25);
heap.insert(46);
heap.insert(12);
heap.insert(16);
heap.insert(89);
