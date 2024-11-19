//Exercice 6 :
let x,y;
let c = prompt("Etrez le operation (+,-,x,/):") ;
let s=0;
do {
    x = parseFloat(prompt("Etrez la premiere valeur:") );
    y = parseFloat(prompt("Etrez la deuxieme valeur:")) ; 
 if(x!=NaN && y!=NaN)
    s=1;
}while(s==0);