const products = [
    { name: 'Laptop', price: 50000, quantity: 2 },
    { name: 'shirt', price: 500, quantity: 10 },
    { name: 'watch', price: 3000, quantity: 5 },
    { name: 'phone', price: 60000, quantity: 1 }
];
let totalCost = 0;
for (const product of products) {

    let productPrice = product.price * product.quantity;
    totalCost = totalCost + productPrice;

}
console.log('The total cost of ', totalCost);