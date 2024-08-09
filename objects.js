// let person ={
//     name: "Michael",
//     Age: 32,
//     favouriteFood: "steak",
//     pets: [
//         "Golden retriever",
//         "Alaskan malamute"],
//         sayHi(){
//             // console.log(this.name)
//         return `Hi my name is ${this.name} and my age is ${this.Age}.`
//     }
// }

// console.log(person.sayHi())



//EXAMPLE 
// person.Age = 200
// person.favouriteSongs = ["sonne", "Back on my BS"]

// console.log(person.sayHi())

// let chosenKey = "name"

// console.log (person)
// console.log (person.name)
// console.log(person["name"])

//Activity 1

let person ={
    name: "Michael",
    Age: 32,
    favouriteFood: "steak",
    pets: [
        "Golden retriever",
        "Alaskan malamute"],
        sayHi(){
            // console.log(this.name)
        return `Hi my name is ${this.name} and my age is ${this.Age}.`
    }
}

console.log(person.sayHi())

//Activity 2

let pet ={
    name: "poco",
    breed: "Gold Retiever",
    age: "9 months",
    colour: "blond",
    Text(){
    return `${this.name} is eating ${this.eat} / ${this.drink}`
 }
}
pet.eat = ("wet food")
pet.drink = ("puppy milk")
console.log(pet.Text())

//Activity 3

const coffeeShop ={
    Branch: "Hampsons",
     food:[
        "sandwich", 4,
        "apple", 1.50],
     drink:[
        "coffee", 1.50, 
        "tea", 2, 
        "water", 2.50],
     totalCost:0,
     drinkOrder(){
     console.log(`May I have a ${this.drink[2]}`)
    this.totalCost += this.drink[3]
    },
         foodOrder(){
        console.log( `For my snack I'll have${this.food[0]}.`)
        this.totalCost += this.food[1]
    },
     total(){this.drinkOrder() 
        this.foodOrder()
        console.log(`£ ${this.totalCost}`)
     }
     }

coffeeShop.total()