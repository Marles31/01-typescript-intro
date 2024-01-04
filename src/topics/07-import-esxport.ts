import {Product, taxCalculation} from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia Edge',
        price: 150
    },
    {
        description: 'iPad Air',
        price: 250
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})

console.log('total: ', total);
console.log('tax: ', tax);