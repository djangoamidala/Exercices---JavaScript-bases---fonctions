let nom = "John"// variable 'nom' qui possède comme valeur "John"
console.log(nom) //print la variable "nom"
nom = "Jane"// modifie la variable `nom` par "John"
console.log(nom)//print la variable `nom`

for(i= 1; i < 11; i++) //boucle qui permet de print les élements de 1 à 10 
{
    console.log(i)//Print l'élement de la boucle à chaque passage
}
console.log("Bonjour tout le monde!")//print "Bonjour tout le monde"
console.log(3+4) //Print le calcul 3 + 4 qui est égal à 7
console.log(nom) //print la variable nom

let firstName = "John" // variable `firstName` qui contient comme valeur "John"
let lastNAme = "Doe" // variable `lastNAme` qui contient comme valeur "Doe"

complete = `${firstName} ${lastNAme}`; //Variable qui additionne des chaines de caractère par la Concaténation 
console.log(complete) //Print la variable `complete`

let age = 24 // variable `age` qui possède comme valeur 24 

if (age >= 18) {// si l'âge est supérieur ou égal à 18 print "vous êtes majeur"
    console.log("Vous êtes majeur") 
}
else {// sinon print "vous êtes mineur"
    console.log("Vous êtes mineur") 
}

couleurs = ["rouge", "vert", "bleu", "jaune", "orange"] //Tableau qui porte le nom couleur avec 5 élements.
for(i= 0;i<couleurs.length;i++) // On print les valeurs du tableau par l'index défini sur i
{
    console.log(couleurs[i]) //Print les élements du tableau à chaque passage.
}

numbers = [1,2,3,4,5] //tableau à 5 valeurs int  
numbers.push(6) // on ajoute la valeur 6 en fin de tableau avec la fonction push 
numbers.pop() // On supprime le dernier élement du tableau
console.log(numbers) //Print le tableau 


function truefalse(a) { //Function qui vérifie si un nombre est pair
    if (a % 2 == 0) { //Si le nombre est modulo 2 il est pair, on renvoi  donc true
        console.log(true)
    
    }
    else {//sinon c'est qu'il n'est pas pair et on renvoi false
        console.log(false)
    }
}
truefalse(2)//print la fonction truefalse avec la valeur 2 
truefalse(3)//print la fonction truefalse avec la valeur 3

function add(numbers) {//fonction qui calcul la somme de toutes les valeurs d'un tableau
    let result = 0
    if ((typeof(numbers) !== 'object') || numbers.length <= 1) //si le type de la valeur testé n'est pas 'object ou <= 1 return, les paramètres sont mauvais
    {
        return "Les paramètres sont mauvais";
    }
    numbers.forEach((number) => { // Additionne les valeurs d'un tableau et return le total dans result 
        result+=number; 
    });

    return result
}
console.log(add(numbers)) //print la function add avec la variable `numbers`

function reverse(str) { //inverse une chaine de caractère
    return str.split("").reverse().join("") /* 
    split() divise la chaine en un tableau de caractère, 
    .reverse()inverse les élements du tableau, 
    .join() join les élements (inversé) du tableau */  
}
console.log(reverse("Bonjour")) //print la function reverse avec la chaine de caractère "Bonjour"