function orders(product, num) {
    let result = 0;
    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;
    switch (product) {
        case "coffee": result = num * coffee; break;
        case "coke": result = num * coke; break;
        case "water": result = num * water; break;
        case "snacks": result = num * snacks; break;
    }
    console.log(result.toFixed(2));
}
orders("water", 5)