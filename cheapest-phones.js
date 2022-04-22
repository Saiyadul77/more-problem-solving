const phones = [
    { name: 'infinix pro 11', price: 21500, camera: 64, storage: 128 },
    { name: 'infinix pro 10', price: 17500, camera: 16, storage: 64 },
    { name: 'infinix pro 9', price: 18500, camera: 12, storage: 64 },
    { name: 'infinix pro 12', price: 25000, camera: 128, storage: 256 }
]
let cheapest = phones[0];
for (const mobile of phones) {
    if (mobile.price < cheapest.price) {
        cheapest = mobile;
    }
}
console.log(cheapest);
