function classDecorator<T extends new (...args: any[]) => any>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }
}

@classDecorator

class SuperClass {
    public myProperty: string = 'ABC123';

    print(){
        console.log('Hola mundo');
    }

}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass)