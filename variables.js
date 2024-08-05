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

//skretch;
    let tomorrowsBreakFast ="coffee an Bacon sandwich";
    let tomorrowLunch ="a sandwich";
    let tomorrowDinner ="pasta";

    console.log(`Tomorrow for my breakfast i will have a ${tomorrowsBreakFast}. After for my lunch i will likely have ${tomorrowLunch} and, later for my dinner i will have ${tomorrowDinner}.`)

//activity Three;

    const Today = new Date();
    const myBirthDate = new Date('1991, 10, 24');
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const daysAlive = Math.floor((Today - myBirthDate) / oneDay);

    console.log(`You have been alive for ${daysAlive} days.`);

//Activity Four;

    let space1 = "x";
    let space2 = "o";
    let space3 = "o";
    let space4 = "o";
    let space5 = "x";
    console.log("  |   |  ")
    console.log(`${space1} | ${space2} |  `)
    console.log("  |   |  ")
    console.log("---------")
    console.log("  |   |  ")
    console.log(`${space3} | ${space4} |  `)
    console.log("  |   |  ")
    console.log("---------")
    console.log("  |   |  ")
    console.log(`${space5} |   |  `)
    console.log("  |   |  ")