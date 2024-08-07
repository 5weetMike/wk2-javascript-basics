//console.log("hello master kenobi".charAt(9).toUpperCase())

// let myCounter = 10;

// myCounter -= 2;

// console.log(myCounter)

// let name ="Mike";
// let age =32;
// let favouriteDrink ="coffee";

// console.log("Hi my name is " + name + " my age is " + age+ " My favourite drink is " + favouriteDrink);

// console.log(`Hi my name is ${name} my age is ${age} My favourite drink is ${favouriteDrink}`)

//Activity One
    const name ="Ol'Blue";
    let age = 70;
    let favouriteColour ="blue";

    console.log(`Hi my name is ${name} my age is ${age} My favourite colour is ${favouriteColour}.`)

//Activity Two;
    let breakFast ="coffee an pastry";
    let lunch = "cheese burger";
    let dinner ="a steak";

    console.log(`For my breakfast i had a ${breakFast}. After for my lunch i had ${lunch} and, later i will have ${dinner}.`)

//stretch;
    let tomorrowsBreakFast ="coffee an Bacon sandwich";
    let tomorrowLunch ="a sandwich";
    let tomorrowDinner ="pasta";

    console.log(`Tomorrow for my breakfast i will have a ${tomorrowsBreakFast}. After for my lunch i will likely have ${tomorrowLunch} and, later for my dinner i will have ${tomorrowDinner}.`)

//activity Three;

    const today = new Date();
    const myBirthDate = new Date('1991, 10, 24');
    const oneDay = 24 * 60 * 60 * 1000;
    const daysAlive = Math.floor((today - myBirthDate) / oneDay);

    console.log(`You have been alive for ${daysAlive} days.`);

//Activity Four;

    let x = "x";
    let o = "o";
 
    console.log("  |   |  ")
    console.log(`${x} | ${o} |  `)
    console.log("  |   |  ")
    console.log("---------")
    console.log("  |   |  ")
    console.log(`${x} | ${x} |  `)
    console.log("  |   |  ")
    console.log("---------")
    console.log("  |   |  ")
    console.log(`${o} | ${x} |  `)
    console.log("  |   |  ")