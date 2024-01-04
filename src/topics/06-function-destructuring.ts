interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia Edge',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation(options: TaxCalculationOptions) {
    
    let total = 0;
    options.products.forEach( product => {
        total += product.price;
    })

}

const shoppingCart = [phone, tablet];
const tax = 0.18;

export {};