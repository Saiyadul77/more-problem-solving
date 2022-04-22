function woodQuntity(chairQuntity, tableQuntity, bedQuntity) {
    const chairWoodQuntity = 3;
    const tableWoodQuntity = 10;
    const bedWoodQuntity = 50;
    const totalChairWood = chairWoodQuntity * chairQuntity;
    const totalTableWood = tableWoodQuntity * tableQuntity;
    const totalBedWood = bedWoodQuntity * bedQuntity;
    const total = totalChairWood + totalTableWood + totalBedWood;
    return total;
}
const totalWood = woodQuntity(10, 2, 3);
console.log(totalWood);
