// Code Question 1 
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

// console.log(hamburger.name); // ?
// console.log(secondBurger.name); // ?


// Code Question 2 
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // ?
// console.log(secondBurger.ingredients[0]); // ?


// Code Question 3 
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

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);


// Code Question 4 
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


// Code Question 5(Bonus) 
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

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";

const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

// console.log(hamburger.maker.name); // ?
// console.log(secondBurger.maker.name); // ?
// console.log(hamburger.maker.restaurant.name); // ?
// console.log(secondBurger.maker.restaurant.name); // ?


// Code Question 6(Bonus) 
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


// Snack Bonus
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

function deepCopy(obj) {
    // Controlla se il valore è un oggetto o un array
    if (obj && typeof obj === 'object') {
        // Crea un nuovo oggetto o array
        const copy = Array.isArray(obj) ? [] : {};

        // Itera su tutte le proprietà dell'oggetto
        for (const key in obj) {
            // Assicurati che la proprietà sia dell'oggetto e non ereditata
            if (obj.hasOwnProperty(key)) {
                // Copia ricorsivamente la proprietà
                copy[key] = deepCopy(obj[key]);
            }
        }

        return copy;
    } else {
        return obj;
    }
}

console.log(deepCopy(chef));
