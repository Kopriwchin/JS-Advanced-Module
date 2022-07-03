function solve(input) {
    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let heroEl = input[i].split(" / ");
 
        let heroName = heroEl[0];
        let heroLevel = Number(heroEl[1]);
 
        let heroItems = [];
        
        if (heroEl.length > 2) {
            heroItems = heroEl[2].split(", ");
        }
 
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}
 
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);