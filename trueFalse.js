// false: 
// 0
// ""
// undefined
// null
// NaN
// false 

// true: 
// '0'
// ' '
// []
// {}
// 'false'

// const age=4; true
// const age=0; false
// const name="blackman";//true
// const name="";//false
// const name=null;//false
let name; //false
if(name){
    console.log("condition is True");
}
else{
    console.log("condition is False");
}