const fetchData = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const json = await res.json();
        console.log(json)

    } catch (error) {
        console.log(error)
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max -min)) +min;
}

fetchData();
console.log(getRandom(1, 151))
