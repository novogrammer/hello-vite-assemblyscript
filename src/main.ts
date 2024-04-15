import './style.css'
import {memory,add,countUp,getValue} from "./../build/release";

console.log("main.ts");

console.log(`add(1,2): ${add(1,2)}`);

console.log(`memory.buffer.byteLength: ${memory.buffer.byteLength}`);


for(let i=0;i<256;i++){
  countUp();
  console.log(`getValue(): ${getValue()}`);
}

