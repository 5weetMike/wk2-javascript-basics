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

            let multiplestwo = [];

            for(let i =0; i <= 20; i++){
               if (i% 2 == 0){
                    multiplestwo.push(i);
               }
            }
            console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplestwo}`);