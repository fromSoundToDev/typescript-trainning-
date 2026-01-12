// Dans une application de livraison, tu dois manipuler des points géographiques. Une coordonnée est toujours composée d'une latitude (nombre) et d'une longitude (nombre).

// Ta mission :

// Crée un type Location qui est un tuple de deux nombres.

// Crée une fonction getDistance qui prend deux Location en paramètres et affiche un message : "Calcul de la distance entre [lat1, long1] et [lat2, long2]..."

// Initialise une variable paris et une variable lyon avec des coordonnées de ton choix.

type Locations = [number, number];
const getDistance = (loc1: Locations, loc2: Locations): void => {
    console.log(`Calcul de la distance entre [${loc1[0]}, ${loc1[1]}] et [${loc2[0]}, ${loc2[1]}]...`);
}

let paris : Locations = [48.8566, 2.3522];
let lyon : Locations = [45.7640, 4.8357];

//==========================================================================================

// Exercice 2 : Statut de Réponse API (Web)
// Lorsqu'on communique avec un serveur, on reçoit souvent un code de statut (ex: 200, 404) et un message (ex: "OK", "Not Found").

// Ta mission :

// Définis un tuple nommé ApiResponse contenant un number (le code) et une string (le message).

// Crée une variable success avec le code 200 et le message "Succès".

// Tente de modifier le premier élément de success par une chaîne de caractères pour voir comment TypeScript réagit.

// Utilise le destructuring pour extraire le code et le message dans deux variables distinctes.

type ApiResponse = [number, string];
let success: ApiResponse = [200, "Succès"]; 
// success[0] = "Erreur"; // Cela provoquera une erreur de type

let  [code , message ] = success;
console.log(`Code: ${code}, Message: ${message}`);

//==========================================================================================

// Tu développes un système de panier d'achat. Chaque ligne de produit est représentée par : le nom du produit (string), le prix unitaire (number) et si le produit est en promotion (boolean).

// Ta mission :

// Crée un type ProductLine.

// Déclare un tableau cart qui contient plusieurs éléments de type ProductLine.

// Écris une petite boucle (ou un forEach) qui affiche le nom du produit et ajoute la mention "(PROMO)" si le booléen est vrai.

type productLine =[string , number , boolean ];
const cart:productLine[] = [
    ["Produit A", 29.99, true],
    ["Produit B", 49.99, false],
    ["Produit C", 19.99, true],
];

const afficherPanier = (panier: productLine[]): void => {
    panier.forEach(([nom, prix, enPromo]) => {
        const statut = enPromo ? "en promo" : "pas en promo";
        console.log(`Produit: ${nom}, Prix: ${prix}€, Statut: ${statut}`);
    }); 
};

//==========================================================================================

// Exercice 4 : Propriétés CSS (Design System)
// Certaines propriétés CSS comme padding ou margin peuvent prendre plusieurs valeurs. Imaginons un système qui gère les marges [Haut/Bas, Gauche/Droite].

// Ta mission :

// Crée un tuple Margin avec deux nombres.

// Utilise les Labels (nouveauté TS) pour nommer les éléments à l'intérieur du tuple (ex: [vertical: number, horizontal: number]). Cela rend le code plus lisible dans l'autocomplétion.

// Crée une instance myMargin et essaie d'accéder aux propriétés.

type Margin = [vertical: number, horizontal: number];
let myMargin: Margin = [10, 20];
console.log(`Marge verticale: ${myMargin[0]}px, Marge horizontale: ${myMargin[1]}px`);
