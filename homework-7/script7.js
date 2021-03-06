magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};

const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: { 
        material: 'metal',
        ingridients: {},
    },
    addIngridientToKettle(nameOfIngridient, amount) {
        this[nameOfIngridient] -= amount;
        this.kettle.ingridients[nameOfIngridient] = (this.kettle.ingridients[nameOfIngridient] || 0) + amount;
    },
    cook (recipe) {
        let couldBeCooked = true;
        for (let key  in recipe) {
            let needAdIngridients = recipe[key];
            if (!this.kettle.ingridients[key] || this.kettle.ingridients[key] < needAdIngridients) {
                couldBeCooked = false;
                break;
            }
        }
        if (couldBeCooked) {
            console.log("Идёт готовка! Ингридиентов хватает!")
        } else {
            console.log("Не хватает ингридиентов");
        }
    }
}; 
kitchen.addIngridientToKettle ("bone", 10);
kitchen.addIngridientToKettle ("stone", 100);
kitchen.addIngridientToKettle ("nail", 100);
kitchen.addIngridientToKettle ("poo", 53);
kitchen.cook(magicBook.recipes.golem);
