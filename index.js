// index.js

//  import the crypto module
function add(a,b){
  return Number(a)+Number(b);
}
function sub(a,b){
  return Number(a)-Number(b);
}

function mul(a,b){
  return Number(a)*Number(b);
}

function div(a,b){
  return Number(a)/Number(b);
}

function sinvalue(a){
  return Math.sin(Number(a));
}

function cosvalue(a){
  return Math.cos(Number(a));
}
function tanvalue(a){
  return Math.tan(Number(a));
}
 const crypto=require("crypto")

const process=require("process")
//  get a commands using process.argv

const ans=process.argv
//console.log(ans)
if(ans[2]=="add"){
  console.log(add(ans[3],ans[4]))
}else if(ans[2]=="sub"){
  console.log(sub(ans[3],ans[4]))
}else if(ans[2]=="mult"){
  console.log(mul(ans[3],ans[4]))
}else if(ans[2]=="divide"){
  console.log(div(ans[3],ans[4]))
}else if(ans[2]=="sin"){
  console.log(sinvalue(ans[3]))
}else if(ans[2]=="cos"){
  console.log(cosvalue(ans[3]))
}else if(ans[2]=="tan"){
  console.log(tanvalue(ans[3]))
}else if(ans[2]=="random"){
    if(ans[3]==undefined){
      console.log("Provide length for random number generation.")
    }else{
      console.log(crypto.randomInt(Number(ans[4])+1));
    }
}
else{
  console.log("Invalid operation")
}




// complete the  function



// switch (operation) {
  
//   default:
//     console.log("Invalid operation");
// }
