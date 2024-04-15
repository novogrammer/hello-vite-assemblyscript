// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}


class Counter{
  value:i8;
  constructor(){
    this.value=0;
  }
  countUp():void{
    this.value+=1;
  }
}
const counter=new Counter();

export function countUp():void{
  counter.countUp();
}
export function getValue():i8{
  return counter.value;
}

