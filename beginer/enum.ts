// Exercice 1 : État d'une Commande (E-commerce)
// Dans un site de vente en ligne, une commande passe par plusieurs étapes. Utiliser un enum numérique permet de suivre cet état facilement.

// Ta mission :

// Crée un enum nommé OrderStatus avec les valeurs : Pending, Shipped, Delivered, Cancelled.

// Crée une fonction updateStatus qui prend un ID de commande et un nouveau statut.

// Si le statut est Delivered, affiche : "La commande [ID] a été remise au client."

enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled
}   
const updateStatus = (orderId: number , status:OrderStatus):void =>{
    if(status === OrderStatus.Delivered){
        console.log(`La commande ${orderId} a été remise au client.`);
    }
}


//==========================================================================================
// Exercice 2 : Niveaux d'Accès (Système de Gestion)
// Dans une application de gestion, différents utilisateurs ont des niveaux d'accès variés.
// Un enum à base de chaînes de caractères peut aider à clarifier ces niveaux.
// Ta mission :

// Crée un enum AccessLevel avec les valeurs : Guest = "GUEST", User = "USER", Admin = "ADMIN".

// Crée une fonction checkAccess qui prend un niveau d'accès et affiche un message différent selon le niveau :          
// Pour Guest : "Accès limité aux fonctionnalités publiques."
// Pour User : "Accès aux fonctionnalités standard."
// Pour Admin : "Accès complet à toutes les fonctionnalités." 
// Crée une interface User avec un nom et un rôle.
// Écris une fonction checkAccess qui renvoie true si l'utilisateur est ADMIN ou EDITOR, et false sinon.


enum AcessLevel {
    gest="GUEST",
    user="USER",
    admin="ADMIN"
}

const checkAccess = (level:AcessLevel):void =>{
    switch(level){
        case AcessLevel.gest:
            console.log("Accès limité aux fonctionnalités publiques.");
            break;
        case AcessLevel.user:
            console.log("Accès aux fonctionnalités standard.");
            break;
        case AcessLevel.admin:
            console.log("Accès complet à toutes les fonctionnalités.");
            break;
    }
}
interface User {
    name:string;
    role:AcessLevel;
}   
const hasAdminAccess = (user:User):boolean =>{
    return user.role === AcessLevel.admin;
}

//==========================================================================================
// Exercice 3 : Méthodes de Paiement (Fintech)
// Imaginons que tu développes un tunnel de paiement. Tu veux limiter les options disponibles.

// Ta mission :

// Définis un enum PaymentMethod.

// Crée une fonction processPayment qui utilise un switch case.

// Pour chaque méthode (ex: CreditCard, PayPal, Crypto), affiche un message différent (ex: "Redirection vers PayPal...").

// Utilise le type de l'enum pour typer l'argument de ta fonction.

enum PaymentMethod {
    CreditCard,
    PayPal,
    Crypto
}

const processPayment = (method: PaymentMethod): void => {
    switch (method) {
        case PaymentMethod.CreditCard:
            console.log("Redirection vers le paiement par carte bancaire...");
            break;
        case PaymentMethod.PayPal:
            console.log("Redirection vers PayPal...");
            break;
        case PaymentMethod.Crypto:
            console.log("Redirection vers le paiement par crypto-monnaie...");
            break;
    }
}   

//==========================================================================================

// Exercice 4 : Priorité de Tickets (Support Client)
// Dans un outil de ticketing, chaque ticket a une priorité. Ici, on va forcer des valeurs numériques spécifiques.

// Ta mission :

// Crée un enum Priority où Low = 0, Medium = 5, High = 10.

// Crée un objet ticket avec un titre et une priorité.

// Fais un test : si la priorité du ticket est supérieure à 5, affiche "Alerte : Priorité élevée !".


enum Priority {    Low = 0,
    Medium = 5,
    High = 10
}   
const ticket = {
    title: "Problème de connexion",
    priority: Priority.High
};
if(ticket.priority > 5){
    console.log("Alerte : Priorité élevée !");
}
//==========================================================================================