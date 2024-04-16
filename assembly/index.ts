// The entry file of your WebAssembly module.

import { GameOfLife } from "./GameOfLife";

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

const values=new StaticArray<i8>(256);

export function countUp():void{
  counter.countUp();
}
export function getValue():i8{
  return counter.value;
}

export function fill():void{
  for(let i=0;i<values.length;i++){
    values[i]=i8(i);
  }
}
export function get():StaticArray<i8>{
  return values;
}


class ComplexObject {
  private field: string="defaultValue";
  getField():string{
    return this.field;
  }
  setField(field:string):void{
    this.field=field;
  }
}
export function newObject(): ComplexObject {
  return new ComplexObject();
}

export function setValueWithObject(target:ComplexObject,value:string):void{
  target.setField(value);
}
export function getValueWithObject(target:ComplexObject):string{
  return target.getField();
}
export function pinpong(value:string):string{
  return value;
}


const gameOfLife=new GameOfLife(512,512);

export function stepGameOfLife():void{
  gameOfLife.step();
}
export function getFieldGameOfLife():StaticArray<u8>{
  return gameOfLife.getField();
}


