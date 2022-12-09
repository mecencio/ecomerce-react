class Cart {
    #products;

    constructor() {
        this.#products = []
    }

    add (product) {
        this.#products.push(product);
    }

    remove(product) {
        const index = this.#products.findIndex(item => item == product);
        (index >= 0) && this.#products.splice(index, 1);
    }

    length() {
        return this.#products.length;
    }

    clear() {
        this.#products = [];
    }

}