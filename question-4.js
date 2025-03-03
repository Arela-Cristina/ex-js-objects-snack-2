// 🏆 Code Question 4


const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}


const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};


// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
//Risposta: Il metodo migliore per copiare questo oggetto è usare lo Spread ({ ...chef }), perché l'oggetto principale ha una struttura semplice e ci permette di copiare il riferimento della funzione, mantenendo la stessa memoria dell'oggetto originale senza alterare la logica della funzione. Tuttavia, se desideriamo creare un nuovo riferimento e una nuova funzione, basta assegnare una funzione anonima con una nuova logica alla proprietà makeBurger nella nuova copia.

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
//Riposta: Il metodo migliore per clonare l'oggetto restaurant sarebbe structuredClone(), perché crea una copia profonda di tutta la struttura dati, clonando completamente tutti gli oggetti anidati, incluso il booleano e l'oggetto Date, senza lasciare alcuna connessione di riferimento tra l'oggetto originale e la copia.