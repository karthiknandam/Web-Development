class ArrayWarp{
  constructor(arr){
    this.arr = arr;
  }
  valueOf(){
    return this.arr.reduce((sum,arr)=> sum+arr , 0);
  }
  toString(){
    return `[${this.arr.join(",")}]`;
  }
}
