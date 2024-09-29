class HashTable {
  constructor(size = 35) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_INT = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_INT + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    const obj = [key , value]
    const getValue = Math.abs(this._hash(key));
    if (!this.keyMap[getValue]) {
      this.keyMap[getValue] = [];
    }
    this.keyMap[getValue].push(obj);
    return this.keyMap;
  }
    get(key){
        const idx = Math.abs(this._hash(key));
        const keyVal = this.keyMap[idx];
        if(!keyVal) return false;
        for(let i = 0 ; i < keyVal.length ; i++){
            if(key === keyVal[i][0]){
                 return keyVal[i];
            }
        }
    }

    values(){
        if(this.keyMap.length === 0) return false;
        let valuesArr = [];
        for(let i = 0 ;i < this.keyMap.length ; i++){
            if(this.keyMap[i]){
                for(let j = 0 ; j < this.keyMap[i].length ; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys(){
        if(this.keyMap.length === 0) return false;
        let keysArr = [];
        for(let i = 0 ;i < this.keyMap.length ; i++){
            if(this.keyMap[i]){
                for(let j = 0 ; j < this.keyMap[i].length ; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}
const ht = new HashTable();
ht.set('white' , "#fff");
ht.set('black' , "#000");
ht.set('marron' , "#f23143");
ht.set('yellow' , "#e20f45");
ht.set('grey' , "#888");
ht.set('purple' , "#0d42s3");
ht.set('white' , "#fff");

