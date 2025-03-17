*Code Question 1*

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name ); // ?

1) Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    - 'Double Cheese Burger'
    - 'Double Cheese Burger'
2) Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
    - Uno

*Code Question 2*

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};
​
const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";
​
console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

1) Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    - 'Salad'
    - 'Salad'
2) Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
    - 3 perchè il primo oggetto hamburger contine al suo interno un oggetto annidato, quindi si salvernanno in memoria 2 oggetti, quando faccio lo spread di secondHamnurger si viene a creare una copia superficiale di hamburger ma non dei sui oggetti annidati e si salverà un solo oggetto. Quindi in totale ci saranno 3 oggetti salvati.

*Code Question 3*

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

1) Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
    - 9 perchè il primo oggetto 'Hamburger' contiene all'interno due oggetti annidati, quindi si salveranno in memoria 3 oggetti, quando vado a clonare altre due volte avrò cosi creato altri 6 oggetti in memoria (3 per ogni nuovo clone). Quindi in totale ci sarenno 9 oggetto salvati in memoria

*Code Question 4*

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
​
const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

1) Qual è il metodo migliore per clonare l’oggetto chef, e perché?
    - Spread(...) perchè non ci sono oggetti complessi e permette di copiare la funzione
2) Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
    - structuredClone perchè ci sono degli oggetti complessi (new Date()) e perchè se usassimo lo spread non si salverebbe in memoria l'oggetto/i annidato/i.

*Code Question 5 (Bonus)*

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";

const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";
​
console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?

1) Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    - 'Chef Hyur'
    - 'Chef Hyur'
    - 'Hyur's II'
    - 'Hyur's II'
2) Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
    - 5 perchè il primo oggetto 'hamburger' contiene altri 2 oggetti annidati, aggiungo l'oggetto newRestaurant e poi aggiungo l'oggetto secondBurgor che essendo una copia supercifiale (spread) non salva in memoria gli oggetti annidati. Quindi in totale 3 + 1 + 1 = 5

*Code Question 6 (Bonus)*

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

1) Qual è il metodo migliore per clonare l’oggetto chef, e perché?
    - In questo oggetto ci sono sia funzioni sia oggetti annidati, quindi l'unico metodo utilizzabile sarebbe uno spread con all'interno altri spread. Per evitare questo unico metodo bisognerebbe creare una funzione ricorsiva.

*Snack  (Bonus)*
Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
