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
    button.removeEventListener('click', getWeatherInfo)
  }


  const button = document.querySelector('.secondPartButton')
  button.addEventListener('click', getWeatherInfo)

  


//  let data;

// // try и catch  ток с синхронныйм кодом


// //startAnimation
//  try{
//   data = JSON.parse('{"name": "Alex"}')
//   console.log(data);
//  }
//  catch (error){
//   console.dir(error)
//  }
//  finally{
// //endAnimation
//  }

//  console.log('Somethink');

// const calc = (a, b) => {
//   if(a !== Number) {
//     throw Error('a - не число')
//   }
//   if(b !== Number) {
//     throw Error('b - не число')
//   }
//   return a + b
// }

// console.log(calc(1, 2))

// const myNumber = 42;

// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))
// localStorage.removeItem('number')
// localStorage.clear()

// const obj = {
//   name:'Alex',
//   Age:18,
// }

// localStorage.setItem('person', JSON.stringify(obj))

// const raw = localStorage.getItem('person');
// const person = JSON.parse(raw);
// person.name = 'Ivan'
// console.log(person);



// function hello() {
//   console.log('hello', this)
// }

// const person = {
//   name:'Alex',
//   age:12,
//   LogInfo: function(job, number) {
//     console.log(`name-${this.name}`)
//     console.log(`age-${this.age}`)
//     console.log(`job-${job}`)
//     console.log(`num-${number}`)
//   },
// }

// // person.LogInfo()

// // hello()

// const Lena = {
//   name:'Elena',
//   age:14,
// }

// person.LogInfo.bind(Lena, 'Frontend', '8-123-123-12-12',)();
// person.LogInfo.call(Lena, 'Frontend', '8-123-123-12-12',);
// person.LogInfo.apply(Lena, ['Frontend', '8-123-123-12-12']);


// const array = [1,2,3,4,5,]

// Array.prototype.multyNum = function(n){
//   return this.map((el) => {
//     return el * n
//   })
// }

// console.log(array.multyNum(2))
// console.log(array.multyNum(5))


//event loop 25 minutes


// const createElement = () => {
//   let count = 0;
//   function increment() {
//     count++
//   }
//   function log() {
//     let message = `count is ${count}`
//     console.log(message)
//   }

//   return [increment, log]
// }

// const [incrementFromFunc, logFromFunc] = createElement();
// incrementFromFunc()
// incrementFromFunc()
// incrementFromFunc()
// logFromFunc()//в функции лог выведет что message равен 3


// const createElement = () => {
//   let count = 0;
//   function increment() {
//     count++
//   }
//   let message = `count is ${count}`
//   function log() {
//     console.log(message)
//   }

//   return [increment, log]
// }

// const [incrementFromFunc, logFromFunc] = createElement();
// incrementFromFunc()
// incrementFromFunc()
// incrementFromFunc()
// logFromFunc()//в функции лог выведет что message равен 0

//замыкание это способность функции запоминать лексическое окружене в которои она была создана

//factorial это 3! = 1*2*3 = 6
// const factorial = (n) => {
//   if(n === 1){
//     return 1
//   }
//   else if(n > 1){
//   return n * factorial(n-1);
//   }
// }

// console.log(factorial(3))

// function checkSubstr(str, subStr){
//   const regExp = new RegExp(subStr);
//   return regExp.test(str)
// }

// console.log(checkSubstr('jjjjfjdkfdjfjdkfjka', 'a'))
// //или
// //i
// console.log(/love/i.test('i love you'));//не чувствителен к регистру можно все версии
// //g
// console.log('I love love you'.match(/love/g));//глобальный поиск вернет массив [love, love]

// const str = `
// 1 mn
// 2 mn
// 3 mn
// `


// console.log(str.match(/^\d/gm))//массив первых значений 
// console.log('I love you'.replace(/love/, 'like'));

// // \d любая цифра 
// // \w любая цифра,буква или пробел
// // \s пробед
// // \D любой символ кроме D
// // \W любой символ кроме W
// // \S любой символ кроме S
// // . любой символ кроме  /n

// // console.log(/\d/.test('1 man'))

// // ^ начало строки 
// // $ конец строки 

// // диапозоны


// //[sdr] любой символ
// //[0-9] диапозон от 0 - 9
// //[a-z] диапозон от a - z

// console.log(/[sdr]/.test('#'));



// //еще больше инфы  если надо (https://youtu.be/2CW1wVtnzi4?si=4WyaAyz5_TsiMk6F)

// const a = {
//   name:'alex',
//   age:18,
//   job:'Frontend dev'
// }

// const b = [
//   ['name', 'alex'],
//   ['age', 18],
//   ['job', 'Frontend dev']
// ]

// // console.log(Object.entries(a));
// // console.log(Object.fromEntries(b));

// const map = new Map(b)
// console.log(map);
// console.log(map.get('job'));
// console.log(map.set('H', 'it is h'));
// console.log(map.delete('H'))
// console.log(map.has('H'));
// console.log(map.size);
// // map.clear()


// for (let [key, value] of map){
//   console.log(key, value)
// }

// for (let key of map.keys()){// выдает ключи 
//   console.log(key)
// }

// for (let value of map.values()){// выдает значения
//   console.log( value)
// }

// const array = Array.from()//делает массив из другово элемента 

// const set = new Set([1,2,2,2,3,3,3,3,3,3,4,5,6,7,8,])//выведет [1,2,3,4,5,6,7,8]
// set.add(9)
// set.has(8)
// set.delete(9);
// //set.clear()
// console.log(Array.from(set) )
 
// Object.prototype.ToLow = function(){
//   return this.toLowerCase()
// }

// const str = 'ABC'

// console.log(str.ToLow());//вернет abc




//git rebase better than merge

// function someThink(){
//   window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
// }
// let header  = document.querySelector('.header')
// header.addEventListener('click', someThink)


// let text = document.querySelector('.forJs')
// text.addEventListener('click', function(e) {
//   e.stopPropagation()
//   alert('It is not rickroll')
// })


function Pirat(name) {
  return this.name = name;
}
const person =   new Pirat("Alice");
console.log(person);

const arrowFunc = (name) => {
  return name
}

const resultArrowFunc = arrowFunc('Alex')
console.log(resultArrowFunc);


// a ||= b;//если а = false то тогда оно будет равно b
// a &&= b;//если а = true то тогда оно будет равно b
// a ??= b//если а = null or undefined то оно будет равно b

// function findShort(s){
//   let a = s.split(' ');
//   let b = a.map(el =>  el.length)
//   let c = Math.min(...b)
//   console.log(...b)//выдаст нам 1 2 3 4 5
//   console.log(b);//выдаст нам [1, 2, 3, 4, 5]
//   return c
//   }

// console.log(findShort('asd asdf asjhdkfl jdskfajdskgjha'))


const numberFormat = new Intl.NumberFormat('en-US').format(1324.12)
console.log(numberFormat);

const c = 300;
out = new Intl.NumberFormat('ru-Ru', {
  style:'currency',
  currency:'RUB'
}).format(c)

console.log(out);


percent = new Intl.NumberFormat('ru-Ru', {
  style: 'percent'
}).format(0.55)
console.log(percent);//выдатс 55


const liter = new Intl.NumberFormat('en-Us', {
  style:'unit',
  unit:'liter',
  unitDisplay:'narrow' //'narrow':'long':'short'будет выдавать 50L , 50 liters , 50 L
}).format(50)

console.log(liter);

const speed = new Intl.NumberFormat('en-Us', {
  style:'unit',
  unit:'kilometer-per-hour'
}).format(80)

console.log(speed);