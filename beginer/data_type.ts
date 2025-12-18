const addition = (x: number, y: number): number => {
    return x + y;
};

console.log(addition(5, 10)); // Résultat : 15

// function and list
const calculerMoyenne = (liste: number[]): number => {
    const moyenne : number = liste.reduce((a,b)=> a+b,0) / liste.length;
    return moyenne;
};

const mesNotes = [15, 12, 18, 10];
console.log(calculerMoyenne(mesNotes));