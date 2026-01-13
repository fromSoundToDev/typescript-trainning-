// L'exercice : Crée une fonction greetUser qui prend un firstName (string) et un lastName optionnel (string).

// Contrainte : Si le nom est présent, affiche "Bonjour [prénom] [nom]". Sinon, affiche juste "Bonjour [prénom]".

// Objectif : Maîtriser le symbole ? pour les paramètres optionnels.

const getUser = ( firstName:string , lastName?:string ):void=>{
    if(lastName){
        console.log(`Bonjour ${firstName} ${lastName}`)
    }else{
        console.log(`Bonjour ${firstName}`)
    }
}

//==========================================================================================

// L'exercice : Crée une interface Product avec name (string),
//  price (number) et discount (number). Crée une fonction 
//  calculateFinalPrice qui prend cet objet en paramètre et retourne le prix final.

// Objectif : Apprendre à passer des objets complexes et à typer le retour de la fonction.

interface Product {
    name:string;
    price:number;
    discount:number;
}   
const calculateFinalPrice = (product:Product):number=>{
    const finalPrice = product.price - (product.price * product.discount / 100);
    return finalPrice;
}
const monProduit:Product = {
    name:"Produit Test",
    price:100,
    discount:15
};
console.log(`Le prix final est de : ${calculateFinalPrice(monProduit)}`);

//=======================================================================================

// L'exercice : Crée une fonction processNumbers qui prend
//  un tableau de nombres et une fonction de rappel (callback).
//   La fonction de rappel doit prendre un nombre et retourner un booléen.

// Objectif : Typer une fonction passée en argument : (arg: type) => returnType.



const processNumbers = (numbers:number[] , callback:(num:number)=>boolean):number[]=>{
    const result:number[] = []; 
    numbers.forEach(num=>{
        if(callback(num)){
            result.push(num);
        }   
    });
    return result;
}

const nombres = [1, 2, 3, 4, 5, 6];
const nombresPairs = processNumbers(nombres, (num)=> num % 2 === 0);
console.log(`Nombres pairs : ${nombresPairs}`);

//==========================================================================================

// Scénario : Tu veux créer une fonction réutilisable pour récupérer le premier élément
//  de n'importe quel tableau (que ce soit des strings, des numbers ou des objets).

// L'exercice : Crée une fonction getFirstElement. 
// Elle doit utiliser les Generics <T> pour que TypeScript sache que le
//  type de l'élément retourné est le même que celui des éléments du tableau.

// Objectif : Comprendre comment rendre une fonction flexible tout
//  en gardant une sécurité de type parfaite.


const getFirstElement = <T>(arr:T[]):T | undefined=>{
    return arr[0];
}
console.log(getFirstElement<string>(["pomme", "banane", "cerise"])); // "pomme"
console.log(getFirstElement<number>([10, 20, 30])); // 10   

//==========================================================================================

// Scénario : Tu reçois une donnée qui peut être soit une string, soit un number.

// L'exercice : Crée une fonction formatInput qui prend un paramètre input: string | number.

// Si c'est une string, retourne-la en majuscules.

// Si c'est un nombre, retourne-le arrondi à deux décimales.

// Objectif : Utiliser typeof à l'intérieur de la fonction pour "rassurer" TypeScript sur le type de la donnée.


const formatInput = (input:string | number): string | number=>{
    if(typeof input === "string"){
        return input.toUpperCase(); 
    }else{
        return parseFloat(input.toFixed(2)); 
    }
}

console.log(formatInput("bonjour"));
console.log(formatInput(3.14159));

//==========================================================================================

