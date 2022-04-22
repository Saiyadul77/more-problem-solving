function jungleAnimals(miles) {
    const firstStage = 10;
    const secondStage = 50;
    const thirdStage = 100;
    if (miles <= 10) {
        const totalAnimals = miles * firstStage;
        return totalAnimals;
    }
    else if (miles <= 20) {
        const firstStageAnimals = 10 * firstStage
        const restmiles = miles - 10;
        const secondStageAnimals = secondStage * restmiles;
        const totalAnimals = firstStageAnimals + secondStageAnimals;
        return totalAnimals;
    }
    else {
        const firstStageAnimals = 10 * firstStage;
        const secondStageAnimals = 10 * secondStage;
        const restmiles = miles - 20;
        const thirdStageAnimals = restmiles * thirdStage;
        const totalAnimals = firstStageAnimals + secondStageAnimals + thirdStageAnimals;
        return totalAnimals;
    }
}
const totalAnimalsJungle = jungleAnimals(50);
console.log(totalAnimalsJungle);