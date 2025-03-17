*Code Question 1*

1) Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    - 'Double Cheese Burger'
    - 'Double Cheese Burger'
2) Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
    - 1

*Code Question 2*

1) Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    - 'Salad'
    - 'Salad'
2) Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
    - 3 perchè il primo oggetto hamburger contine al suo interno un oggetto annidato, quindi si salvernanno in memoria 2 oggetti, quando faccio lo spread di secondHamnurger si viene a creare una copia superficiale di hamburger ma non dei sui oggetti annidati e si salverà un solo oggetto. Quindi in totale ci saranno 3 oggetti salvati.

*Code Question 3*

1) Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
    - 9 perchè il primo oggetto 'Hamburger' contiene all'interno due oggetti annidati, quindi si salveranno in memoria 3 oggetti, quando vado a clonare altre due volte avrò cosi creato altri 6 oggetti in memoria (3 per ogni nuovo clone). Quindi in totale ci sarenno 9 oggetto salvati in memoria

*Code Question 4*

1) Qual è il metodo migliore per clonare l’oggetto chef, e perché?
    - Spread(...) perchè non ci sono oggetti complessi e permette di copiare la funzione
2) Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
    - structuredClone perchè ci sono degli oggetti complessi (new Date()) e perchè se usassimo lo spread non si salverebbe in memoria l'oggetto/i annidato/i.

*Code Question 5 (Bonus)*

1) Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    - 'Chef Hyur'
    - 'Chef Hyur'
    - 'Hyur's II'
    - 'Hyur's II'
2) Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
    - 5 perchè il primo oggetto 'hamburger' contiene altri 2 oggetti annidati, aggiungo l'oggetto newRestaurant e poi aggiungo l'oggetto secondBurgor che essendo una copia supercifiale (spread) non salva in memoria gli oggetti annidati. Quindi in totale 3 + 1 + 1 = 5

*Code Question 6 (Bonus)*

1) Qual è il metodo migliore per clonare l’oggetto chef, e perché?
    - In questo oggetto ci sono sia funzioni sia oggetti annidati, quindi l'unico metodo utilizzabile sarebbe uno spread con all'interno altri spread. Per evitare questo unico metodo bisognerebbe creare una funzione ricorsiva.

*Snack  (Bonus)*
Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
