// const teslaCar = {
//     name:'tesla',
//     model:'X',
//     // details:{
//     //     color:'red',
//     // }
// }

// const allCars = [teslaCar,]

// let colorOfCar = ''

// allCars.forEach(el => {
//     colorOfCar += (el?.details?.color);//если элемента нет выдает  undefined
// })

// console.log(colorOfCar);



// const b = 1;

// let a = 0 ?? b;//задает значение если переменая не нашлась (??)
// console.log(a);


// const {name, surname, age} = {name:'Alex', surname:'Ivanov', age:52, };
// console.log(name);//Alex
// const [first, second, three, four, five,] = [1,2,3,4,5,]
// console.log(five);

// const [, , , , five,] = [1,2,3,4,5,]
// console.log(five);

// const [first, second, three, four, five = 0//я если элемента в массиве нет задается значение по умолчанию,] = [1,2,3,4,5,]
// console.log(five);

// const user = {
//     name:'Alex',
//     age:'23',
// }

// const {name: userName, age} = user;//name:... чтобы задать свое название ключу
// console.log(userName);

// const user = {
//     name:'Alex',
//     age:21,
//     hasCar:false,
// }

// const moder = {
//     ...user,
//     hasCar:true,
//     hasModerStatus:true,
// }

// console.log(moder);

// const user_second = {
//     name:'Alex',
//     age:21,
//     hasCar:{
//         model:'Tesla',
//         color:'red',
//     },
// }

// const moder_second = {
//     ...user,
//     hasCar:{
//         ...user_second.hasCar
//     },
    
//     hasModerStatus:true,
// }

// console.log(moder_second);


// const user = {
//     name:'Alex',
//     age:18,
//     hasCar:true,
// };

// const {hasCar, ...rest} = user;

// const getInfo = (user) => {
//     console.log(user)
//     console.log(user.age, user.name);
// };

// console.log(getInfo(rest));


const  a = setTimeout(() => {
    console.log(1);
},1000)


clearTimeout(a);


console.log(2);
console.log(3);

// const b = setInterval(() => {
//     console.log('ванюща пора кушать');
// }, 1000)


setTimeout(() => {
    clearInterval(b)
}, 5000)//убереть  console.log('ванюща пора кушать через 5 секунд (или выполнений)