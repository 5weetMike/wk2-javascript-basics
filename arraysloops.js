//Arrays loops example:

// let coffeeOrder =[
//     "Alex - cortardo",
//     "Ben - mocha",
//     "Charlie- tea"
// ]
// console.log(coffeeOrder,length,3);

//.push method


// let coffeeOrder1 =[
//     "Alex - cortardo",
//     "Ben - mocha",
//     "Charlie - tea"
// ];

// console.log(coffeeOrder1);
// console.log(coffeeOrder1,length);

// coffeeOrder1.pop;

// console.log(coffeeOrder1);
// console.log(coffeeOrder1,length);

// let favouriteSongs =[
//          "Real slim shady - Eminem",
//          "Welcome to the jungle - Guns and Roses",
//          "Back on my BS - BigXthaPlug",
//          "Cisco kid - Redman.Methodman,Cyress Hill",
//          "Sonne - Rammstein"
//         ]
//    example seperate
           // console.log(favouriteSongs[0])
//         // console.log(favouriteSongs[1])
//         // console.log(favouriteSongs[2])
//         // console.log(favouriteSongs[3])
//         // console.log(favouriteSongs[4]);
//              for(let i =0; i < favouriteSongs.length; i++){
//                console.log (favouriteSongs[i])
//             }

          //   let multiplestwo = [];

          //   for(let i =0; i <= 20; i++){
          //      if (i% 2 == 0){
          //           multiplestwo.push(i);
          //      }
          //   }
          //   console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplestwo}`);

          //   let age = 15;

          //   while (age < 18){
          //      console.log("You're a child!")
          //      age++
          // }
          //   console.log("you're an adult");


          // let cards = ["Diamonds", "Spade", "Heart", "Club"];
          // let currentCard = "Club";

          // while(currentCard != "Spade"){
          //      console.log(currentCard);
          //      currentCard = cards[Math.floor(Math.random()*4)]
          // }

          // console.log(currentCard)
         
//Activity One
let favFilms =[
     "Predator",
     "Alien",
     "Dawn of the dead",
     "28days later",
     "Shawn of the dead"
]
favFilms.push(
     "Aliens VS Predator (AVP)",
     "Hot Fuzz"
           ) 
console.log (favFilms)
                      


// //Activity two

//      for(let i =0 ; i < 5 ; i++){
//           let randomNumber = Math.floor(Math.random() * 50) +1;
//           console.log(randomNumber);
//      }

// //Activity Three
// let countDown=[];
// for(let i = 9; i >= 0; i--){
//      {
//      countDown.push(i);
//           }
//        }
//        console.log(`${countDown}`)

//Activity Four

//Activity Five
let numb=[]
for(let i =0; i < 6; i++){
     let random = Math.floor(Math.random() * 30);     
     if (random %7 === 0) {
               numb.push(random);
               
          }
       }
       console.log(`${numb.length} numbers found: ${numb}`);

//Activity six