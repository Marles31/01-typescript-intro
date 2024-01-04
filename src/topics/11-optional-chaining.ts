export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Tony',
}

const passenger2: Passenger = {
    name: 'Peter',
    children: ['Natalia', 'Ivana']
}

const returnChildrenNumber = (passenger: Passenger) => {
    
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger2.name, howManyChildren);

    return howManyChildren;

}

returnChildrenNumber(passenger1);