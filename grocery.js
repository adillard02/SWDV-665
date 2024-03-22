class Grocery {
    constructor(name, quantity, price, category) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
    }
}

const groceries = [
    new Grocery("Milk", 3, 2.5, "Dairy"),
    new Grocery("Bread", 6, 1.5, "Bakery"),
    new Grocery("Eggs", 11, 1.8, "Dairy"),
];

export {groceries};
