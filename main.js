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
