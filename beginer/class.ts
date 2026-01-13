// Encapsulation et Modificateurs (public, private, protected)
// Le Cas Réel : La gestion d'un compte bancaire ou d'un profil
//  utilisateur où certaines données ne doivent pas être modifiables directement depuis l'extérieur.

// L'exercice : Crée une classe BankAccount.

// Le solde (balance) doit être privé.

// Ajoute une méthode pour déposer de l'argent et une pour consulter le solde.

// Défi : Ajoute un modificateur readonly sur un identifiant de compte qui ne change jamais.

// Objectif : Comprendre comment protéger les données sensibles d'une classe.

class BankAccount {
    private balance: number;
    readonly accountId: string; 
    constructor(accountId: string, initialBalance: number = 0) {
        this.accountId = accountId;
        this.balance = initialBalance;
    }
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Déposé: ${amount}. Nouveau solde: ${this.balance}`);
        } else {
            console.log("Le montant doit être positif.");
        }
    }
    getBalance(): number {
        return this.balance;
    }   
}

const monCompte = new BankAccount("ACC12345", 100);
monCompte.deposit(50);
console.log(`Solde actuel: ${monCompte.getBalance()}`);
// monCompte.balance = 1000; // Erreur : balance est privé
// monCompte.accountId = "NEWID"; // Erreur : accountId est en lecture seule
//==========================================================================================

// L'Héritage (extends)
// Le Cas Réel : Un système de gestion d'employés. Tous les employés ont un nom,
//  mais les "Managers" ont des responsabilités en plus.

// L'exercice : 1. Crée une classe parente Employee.
//  2. Crée une classe enfant Manager qui hérite de Employee.
//   3. Utilise le mot-clé super() pour passer le nom au constructeur parent.

// Objectif : Réutiliser du code et créer des hiérarchies logiques.


class Employee {
    name: string    
    constructor(name: string) {
        this.name = name;
    }
    displayInfo(): void {
        console.log(`Employé: ${this.name}`);
    }
}
class Manager extends Employee {
    department: string  
    constructor(name: string, department: string) {
        super(name); 
        this.department = department;
    }
    displayInfo(): void {
        super.displayInfo(); 
        console.log(`Département: ${this.department}`);
    }
}

const manager = new Manager("Alice", "Ventes");
manager.displayInfo();
//==========================================================================================

//         Les Classes Abstraites (abstract)
// Le Cas Réel : Tu crées un système de rendu de documents (PDF, HTML, Markdown).
//  Tu veux forcer chaque format à avoir une méthode export(),
//   mais la classe "Document" seule ne veut rien dire.

// L'exercice : Crée une classe abstract Shape. Elle définit une méthode abstract getArea(): number.

// Crée ensuite deux classes Circle et Square qui implémentent obligatoirement cette méthode.

// Objectif : Créer des "modèles" que d'autres classes doivent suivre rigoureusement.

abstract class Shape {
    abstract getArea(): number; 
}   
class Circle extends Shape {
    radius: number  
    constructor(radius: number) {
        super();
        this.radius = radius;
    }   
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Square extends Shape {
    sideLength: number  
    constructor(sideLength: number) {
        super();
        this.sideLength = sideLength;
    }   
    getArea(): number {
        return this.sideLength * this.sideLength;
    }
}

const myCircle = new Circle(5);
console.log(`Aire du cercle: ${myCircle.getArea()}`);

const mySquare = new Square(4);
console.log(`Aire du carré: ${mySquare.getArea()}`);
//==========================================================================================
