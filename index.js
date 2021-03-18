const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
    
    cats.push (name)
}

destructivelyAppendCat ('Ralph')

function destructivelyPrependCat (name) {
    cats.unshift (name)
}

destructivelyPrependCat ('Bob')

function destructivelyRemoveLastCat(name) {
    cats.pop (name)

}

destructivelyRemoveLastCat ('Ralph')

function destructivelyRemoveFirstCat(name) {
    cats.shift (name) 
}
destructivelyRemoveFirstCat ('Bob')

function appendCat(name) {

    return [...cats, name];

}

    appendCat("Broom");

    function prependCat(name) {
        return [name, ...cats]
    
    }

    prependCat ('Arnold')

    function removeLastCat(name){
        return cats.slice (0,2)
    }

    function removeFirstCat() {

        return cats.slice(1);
    
    }
    
   