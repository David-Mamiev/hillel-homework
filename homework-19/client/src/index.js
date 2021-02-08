const getPokemon = () => fetch('https://api.pokemontcg.io/v2/cards');
getPokemon().then((response) => (response.json())).then((data) => {
    const pockemon1 = data.data[(Math.floor(Math.random() * Math.floor(250)))];
    const pockemon2 = data.data[(Math.floor(Math.random() * Math.floor(250)))];
    const pockemon3 = data.data[(Math.floor(Math.random() * Math.floor(250)))];
    const pockemon4 = data.data[(Math.floor(Math.random() * Math.floor(250)))];
    const maxHealth = Math.max(pockemon1.hp, pockemon2.hp, pockemon3.hp, pockemon4.hp);
    const maxHealthPockemon = (pockemon1.hp == maxHealth) ? pockemon1 : (pockemon2.hp == maxHealth) ? pockemon2 : (pockemon3.hp == maxHealth) ? pockemon3 : pockemon4;
    console.log(maxHealthPockemon);
    console.log('The healthiest pokemon is ' + maxHealthPockemon.name);
});