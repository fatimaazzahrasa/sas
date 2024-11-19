//1
// let x;
// for(x=0;x<=10;x++)
//     console.log(x)
// //2
// for(let i=1;i<20;i++){
//     i = i + 1;
//     console.log(i);
// }
//3
// for(let i=1;i<=5;i++){
//     console.log(i*i);}
//4

// for(let i=10;i>=1;i--){
   
//     console.log(i);
// }
//5
// for(let i=1;i<=10;i+=2){
   
//     console.log(i);
// }
//6
// let x=0;
//  for(let i=0;i<5;i++){
   
//        console.log(x);
//        x+=2;
//      }
//7
// for(let i=1;i<=5;i++){
   
//     console.log(i*3);
// }
// 8
// let x ="hello world";
// whille(){
   
//     console.log(i/3);
// }
// 10
// let s=0;
// for(let i=0;i<5;i++){
//     s+=i;   
// }
// console.log("la somme de 1 â 5 est :"+s);
// // 10 /2

// function somme (n) {
// let s=0 ;
// for(let i=0;i<n;i++){
// s+=i;  
// }
// console.log("la somme de 1 â "+n+" est :"+s);
// }
// somme (10)
// console.log("---------------------------------------");
// function somme (n) {
// let s=0 ;
// for(let i=0;i<n;i++){
// s+=i;  
// }
// return(s);
// }
// console.log("la somme de 1 â "+n+" est :"+s);
// somme (10)
// Exercices Intermédiaires :
// 1:
// let y='f', x="fatima zahra";
// console.log(x.includes('H'));
function verifier (x,y){
    if (typeof x !=='string'|| typeof y !=='string')
        return 0;
for(let i=0;i<x.length;i++){
if (x[i]===y)return 1;
}return 0;}
// console.log(verifier("alaa",'a'));
// 3
function supprime_espace (x){
    if (typeof x !=="string")return 0;
    let y ="" ;
    for (let i=0;i<x.length;i++){
        
        if (x[i]!==" ") {
           y +=x[i];
        }
        
    }
return y;
// }console.log(supprime_espace("f t im a"));
// 3
function inverse_chaine (x){
    if (typeof x !=="string") return 0;
    let y="";
    for (let i=x.length-1;i>=0;i--){
      y+=x[i];}
    return y;

}

// 4
function lengthe (x){
    if (typeof x !=="string") return 0;
    let s=0;
    for (let i=0;i<x.length;i++){
        if(verifier("aeoiuyAEOIUY",x[i])==0)
            s++;
    }return s
}
// 5
// 
let q;
console.log(q);