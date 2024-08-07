// let age = Math.floor(Math.random()*90);

// if (age < 18) {
//     console.log("Ticket price: £8")}
// else if (age > 18 && age < 60){ 
//     console.log("Ticket price: £10.95")}
//    else {
//    console.log("Ticket price: £10")}


//     let isGrinding = false
    
//     const pressGrindBeans = () => {
//         if (isGrinding){
//             console.log("stopping the grind")
//             isGrinding = true
//         } else{
//             console.log("grinding beans for 20 seconds")
//             isGrinding = false
//         }
// }   
//    pressGrindBeans()

//Arguement example.

//    const cashWithdrawal = (amount, accnum) =>{

//     console.log(`Withdrawing ${amount} from account ${accnum}`);
//    }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50449921);



//    const favColour = (colour) => {
//     console.log(`My favourite colour is ${colour}.`)
//    }

//    favColour("Olive")
//    favColour("Orange")
//    favColour("Cherry red")
  
//    const checkTicketPrice = (age) =>
//    {
//     if (age < 18){
//         console.log("young")
//     } else {
//         console.log("older")
//     } 
//    }

//    checkTicketPrice(18)
//    checkTicketPrice(12)   
//    checkTicketPrice(45)

//not working code:
//    const addUp =(num1, num2) =>{
//     console.log("function run")
//     return num1 + num2;
//    }
//    addUp(2,3)

//    if( addUp(8,3) >10);{
//        console.log("bigger than 10")
// } else {
//        console.log("not")}
//end


//declaration example1
// function square(number){
//     return number * number;
// };

// square(5);

//Activity 1

// const factorial = (n)=>{
//     if ((n === 0)||(n === 1)){
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));

// //Activity 2

// let orderCount = 0;

// const takeOver = (topping, topping1) =>{
//     console.log (`Pizza with ${topping} and ${topping1}`)
//     orderCount++;
// }
// takeOver("Pineapple", "Ham")

//Activity 3

const cashWithdrawal = (amount=5000, accnum=1234) => {
    if (accnum !== 1234){
        console.log("incorrect pin")
        return;
    }
if (accnum === 1234 && amount <= 5000){
    console.log(`Withdrawing ; ${amount} from account ${accnum}`);
   
} else {
        console.log("sorry not enough funds try again")
        
}
}
    cashWithdrawal(5000, 1234);
    cashWithdrawal(9000, 1234);
    cashWithdrawal(200, 5044);
    // console.log(`Withdrawing ; ${amount} from account ${accnum}`);

   