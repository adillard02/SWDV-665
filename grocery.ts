class Grocery {
    name: string;
    quantity: number;
    price: number;
    category: string;

    constructor(name: string, quantity: number, price: number, category: string) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
    }
}

const groceries: Grocery[] = [
    new Grocery("Milk", 3, 2.5, "Dairy"),
    new Grocery("Bread", 6, 1.5, "Bakery"),
    new Grocery("Eggs", 11, 1.8, "Dairy"),
];

export { Grocery, groceries };
