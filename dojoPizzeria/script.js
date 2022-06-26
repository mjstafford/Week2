function pizzaOven(crustType, suaceType, cheeses, toppings) {
  let pizza = {}
  pizza.crustType = crustType
  pizza.suaceType = suaceType
  pizza.cheeses = cheeses
  pizza.toppings = toppings
  return pizza
}

//bonus//
let allOptions = {
  crustType: ["deep dish", "hand tossed", "thin"],
  sauceType: ["traditional", "garlic", "pesto"],
  cheeses: ["mozzarella", "parmesan", "goat", "ricotta"],
  toppings: ["pepperoni", "mushroom", "onion", "garlic", "peppers", "sausage", "sardines", "basil", "pineapple", "bananas?"]

}

function randomPizza() {
  let pizza = {}

  for (let option in allOptions) {
    if (option == "crustType") {
      pizza.crustType = allOptions[option][Math.floor(Math.random() * allOptions.crustType.length)]
    } else if (option == "sauceType") {
      pizza.sauceType = allOptions[option][Math.floor(Math.random() * allOptions.sauceType.length)]
    } else {
      randomNumToppings = Math.floor(Math.random() * (allOptions[option].length - 1) + 1) //at least 1 topping
      pizza[option] = []

      //does not account for ignoring duplicates
      for (let i = 0; i < randomNumToppings; i++) {
        randToppingIndex = Math.floor(Math.random() * allOptions[option].length)
        pizza[option].push(allOptions[option][randToppingIndex])
      }
    }
  }
  return pizza
}

let pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
let favoritePizza = pizzaOven("hand tossed", "traditional", ["mozzarella"], ["olives", "pineapple"])
let margheritaPizza = pizzaOven("hand tossed", "marinara", ["fresh mozzarella"], ["basil", "tomatoes"])
console.log("pizza 1:")
console.log(pizza1)
console.log("\npizza 2:")
console.log(pizza2)
console.log("\nfavorite Pizza:")
console.log(favoritePizza)
console.log("\nmargherita Pizza:")
console.log(margheritaPizza)

console.log("\nRandom pizza generated:")
console.log(randomPizza())

