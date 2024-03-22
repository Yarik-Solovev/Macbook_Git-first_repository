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


// const  a = setTimeout(() => {
//     console.log(1);
// },1000)


// clearTimeout(a);


// console.log(2);
// console.log(3);

// // const b = setInterval(() => {
// //     console.log('ванюща пора кушать');
// // }, 1000)


// setTimeout(() => {
//     clearInterval(b)
// }, 5000)//убереть  console.log('ванюща пора кушать через 5 секунд (или выполнений)





// const getUserInfo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const mainData = {name:'Alex', age:17, hasCar: true, id:1,};
//             resolve(mainData);
//         }, 2000)
//     })
// }

// const getGame = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const mainGame = {name:'GTA V', price:3000, value: 1,};
//             resolve(mainGame);
//         }, 2000)
//     })
// }

// const run = () => {
//     Promise.all([getGame(), getUserInfo()])
//             .then((userInfo) => {
//                 console.log(userInfo);
//                 return getGame(userInfo.id)
//             })
//             .then((game) => {
//                 console.log(game);
//             })
                
// }

// run()


//https://jsonplaceholder.typicode.com/posts


// const newPost = {
//     id: 698432,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton', 
//}

// const test = JSON.stringify(newPost)

// console.log(test);

// const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url ,{        //axios.get() //можно через аксиос но установить надо (ненадо data.json)
//     method: 'GET',
// }
// )
//             .then((data) => {
//                 if (data.ok){
//                 return data.json();
//                 }
//                 else{
//                     console.error('ты ишак')
//                 }
//             })
//             .then((info) => {
//                 console.log(info);
//             })



// function openOrSenior(data){
//     let finalList = [];
//     data.forEach((el) => {
//         if(el[0] >= 55 && el[1] > 7){
//             finalList.push('Senior')
//         }
//         else {
//             finalList.push('Open')
//         }
        
//     });
//     return finalList
// }


// const run = () => {
//     return new Promise((res, rej) => {
//         fetch('https://jsonplaceholder.typicode.com/comments')
//             .then((data) => {
//                 return data.json()
//             })
//             .then((info) => {
//                 const infoFromServer =(info[0])
                
//             })
//     })
// }
//  run()

// const delay = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }

//  const url = 'https://jsonplaceholder.typicode.com/comments/1'

// function fetchTodos() {
//     return delay(2000)
//         .then(() => {
//             return fetch(url)
//                 .then((data) => {
//                      return data.json()
//                 })
                
//         })
// }

// fetchTodos()
//     .then((info) => {
//         console.log('User',info)
//     })



//тоже самое что сверху только на async await
// async function asyncFetchTodos() {
//     await delay(2000);
//     const data = await fetch(url);
//     const info = await data.json();
//     console.log(info)
// }

// asyncFetchTodos()

const url ='https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m#daily=sunrise&timezone=Europe%2FMoscow'


 async function getWeatherInfo() {
     const data = await fetch(url);
     const info = await data.json();
     renderCurrentInterval(info.current.interval) 
     
}

const firstPart = document.querySelector('.firstPart')

  function renderCurrentInterval (information) {
    const div = document.createElement('div');
    div.textContent=`${information}`
    div.className='info'
    firstPart.append(div);
    button.removeEventListener('click')
  }


  const button = document.querySelector('.secondPartButton')
  button.addEventListener('click', getWeatherInfo)

  
 let data;

 try{
  data = JSON.parse('{"name": "Alex"}')
  console.log(data);
 }
 catch (error){
  console.dir(error)
 }

 console.log('Somethink');