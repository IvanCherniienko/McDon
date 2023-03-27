Hamburger.SIZE_SMALL = {
    price: 50,
    callories: 20,
}
Hamburger.SIZE_BIG = {
    price: 100,
    callories: 40,
}
Hamburger.STUFFING_POTATO = {
    price: 15,
    callories: 10,
}
Hamburger.STUFFING_CHEESE = {
    price: 10,
    callories: 20,
}
Hamburger.STUFFING_SALAT = {
    price: 20,
    callories: 5,
}
Hamburger.TOPPING_SAUCE = {
    price: 15,
    callories: 0,
}
Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 5,
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

function Hamburger(hamburger) {
    this.hamburger = hamburger
}

Hamburger.prototype.addTopping = function (topping) {
    this.hamburger.price += topping.price
    this.hamburger.callories += topping.callories
}

Hamburger.prototype.calculatePrice = function () {
    return this.hamburger.price
}

Hamburger.prototype.calculate = function () {
    return this.hamburger.callories
}

hamburger.addTopping(Hamburger.TOPPING_MAYO)
console.log('Calories: '+ hamburger.calculate ())
console.log('Price: ' + hamburger.calculatePrice())
hamburger.addTopping(Hamburger.TOPPING_SAUCE)
console.log("Price with sauce: " + hamburger.calculatePrice())




