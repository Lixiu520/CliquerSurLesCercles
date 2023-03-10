console.log('connecté!');
console.log("Hello!");
document.getElementById('titre').style.color="green";
const titre = document.getElementById('titre');
titre.style.color="blue";
// titre=2;
// console.log(titre);
// let score=0;
// console.log(score);
// console.log(score, "initialisation");
// score++;
// console.log(score, "apres addition");
// const cours = "Javascript";
// console.log(cours, "cours");
// const mot1 = "Hello";
// const mot2 = "World";
// const phrase = mot1 +" " +mot2;
// console.log(phrase);    
// let calcul=0;
// calcul ++;
// console.log(calcul, "calcule");
//selectionner
const btnRed=document.getElementById('btn-red');
const btnBlue=document.getElementById('btn-blue');
let compteur=0;
let span=document.getElementById('span');
const replay = document.getElementById('replay'); 
console.log(replay); 

//stocker
console.log(btnRed, 'bouton rouge');
console.log(btnBlue, 'bouton blue');
console.log(compteur, 'compteur au demarrage');
//soumettre a un action
btnBlue.addEventListener('click',function(){
    add();
   
   
});
btnRed.addEventListener('click',function(){
    add();

});
function add(){
    console.log('cliquer')
    compteur ++;
    console.log(compteur, 'apres incrementation');
    span.innerText=compteur;
};
// btnRed.addEventListener


setTimeout(function(){
    // Je supprime les cercles
    btnRed.remove(); 
    btnBlue.remove(); 
}, 10000); 


replay.addEventListener('click', function(){
    console.log('cliqué'); 
    location.reload();
});
