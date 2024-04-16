

export class GameOfLife{
  private readonly width:i32;
  private readonly height:i32;
  private field:StaticArray<u8>;
  private nextField:StaticArray<u8>;
  constructor(width:i32,height:i32){
    this.width=width;
    this.height=height;
    this.field=new StaticArray<u8>(width*height);
    this.nextField=new StaticArray<u8>(width*height);
    for(let i=0;i<this.field.length;i++){
      this.field[i]=(Math.random()<0.5)?0:1;
    }
  }
  private getValue(virtualX:i32,virtualY:i32):u8{
    const x=(virtualX+this.width)%this.width;
    const y=(virtualY+this.height)%this.height;
    return this.field[y*this.width+x];
  }
  private setNextValue(virtualX:i32,virtualY:i32,value:u8):void{
    const x=(virtualX+this.width)%this.width;
    const y=(virtualY+this.height)%this.height;
    this.nextField[y*this.width+x]=value;
  }
  private flip():void{
    const temp=this.field;
    this.field=this.nextField;
    this.nextField=temp;
  }
  step():void{
    for(let y:i32=0;y<this.height;y++){
      for(let x:i32=0;x<this.width;x++){
        let aliveNeighbors=0;
        aliveNeighbors+=this.getValue(x-1,y-1);
        aliveNeighbors+=this.getValue(x+0,y-1);
        aliveNeighbors+=this.getValue(x+1,y-1);
        aliveNeighbors+=this.getValue(x-1,y+0);
        aliveNeighbors+=this.getValue(x+1,y+0);
        aliveNeighbors+=this.getValue(x-1,y+1);
        aliveNeighbors+=this.getValue(x+0,y+1);
        aliveNeighbors+=this.getValue(x+1,y+1);
        const life=this.getValue(x,y);
        let nextLife:u8;
        if(life!=0){
          nextLife=(aliveNeighbors==2 || aliveNeighbors==3)?1:0;
        }else{
          nextLife=(aliveNeighbors==3)?1:0;
        }

        this.setNextValue(x,y,nextLife);
      }
    }
    this.flip();
  }
  getField():StaticArray<u8>{
    return this.field;
  }
}