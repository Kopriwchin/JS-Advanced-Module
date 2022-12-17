function solution(arr) {
   const teams = ["Argentina", "Brazil", "Croatia", "Denmark"];

   const souvenirTypes = ["flags", "caps", "posters", "stickers"];

   let chosenTeam = arr[0];
   let chosenSouvenir = arr[1];
   let chosenAmount = Number(arr[2]);
   
   if (!teams.includes(chosenTeam)) {
        console.log("Invalid country!");
        return;
    } else if (!souvenirTypes.includes(chosenSouvenir)) {
        console.log("Invalid stock!");
        return;
    }

    let flagsPrices = [3.25, 4.20, 2.75, 3.10];
    let capsPrices = [7.20, 8.50, 6.90, 6.50];
    let postersPrices = [5.10, 5.35, 4.95, 4.80];
    let stickersPrices = [1.25, 1.20, 1.10, 0.90];

    let price = 0;

    if (chosenSouvenir == "flags") {
        price = flagsPrices[teams.indexOf(chosenTeam)] * chosenAmount;
    } else if (chosenSouvenir == "caps") {
        price = capsPrices[teams.indexOf(chosenTeam)] * chosenAmount;
    } else if (chosenSouvenir == "posters") {
        price = postersPrices[teams.indexOf(chosenTeam)] * chosenAmount;
    } else if (chosenSouvenir == "stickers") {
        price = stickersPrices[teams.indexOf(chosenTeam)] * chosenAmount;
    }
   
    console.log(`Pepi bought ${chosenAmount} ${chosenSouvenir} of ${chosenTeam} for ${price.toFixed(2)} lv.`);
}

solution(["USA", "caps", 8]);