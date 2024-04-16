import './style.css'
import {memory,add,countUp,getValue,fill,get,newObject,setValueWithObject,getValueWithObject, pinpong, stepGameOfLife, getFieldGameOfLife } from "./../build/release";

console.log("main.ts");

console.log(`add(1,2): ${add(1,2)}`);

console.log(`memory.buffer.byteLength: ${memory.buffer.byteLength}`);


for(let i=0;i<256;i++){
  countUp();
  console.log(`getValue(): ${getValue()}`);
}

fill();
console.log(get());

const object=newObject();
console.log(object);
console.log(getValueWithObject(object));
setValueWithObject(object,"abc");
console.log(getValueWithObject(object));

console.log(pinpong("ping"));



{
  const WIDTH=512;
  const HEIGHT=512;
  const app=document.querySelector("#app")!;
  const canvas=document.createElement("canvas");
  canvas.width=WIDTH;
  canvas.height=HEIGHT;
  app.appendChild(canvas);
  const ctx=canvas.getContext("2d");
  setInterval(()=>{
    if(!ctx){
      throw new Error("ctx is null");
    }
    stepGameOfLife();
    const field=getFieldGameOfLife();
    if(field.length!=WIDTH*HEIGHT){
      throw new Error("unexpected length");
    }
    const imageData=ctx.createImageData(WIDTH,HEIGHT);
    for(let i=0;i<field.length;i++){

      if(field[i]!=0){
        imageData.data[i*4+0]=255;
        imageData.data[i*4+1]=255;
        imageData.data[i*4+2]=255;
      }else{
        imageData.data[i*4+0]=0;
        imageData.data[i*4+1]=0;
        imageData.data[i*4+2]=0;
      }
      imageData.data[i*4+3]=255;
    }
    ctx.putImageData(imageData,0,0);
      
  },1000/10);
  
}


