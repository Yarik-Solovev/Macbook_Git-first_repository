import React, {useState} from "react";
import './index.css'


function Header(){
 
   let Users = [
    {Name: 'Alex', id: '1', passport:'123',age: 20},
  
    ];
    const [isDark, setColor] = useState(true)
    function swipeColor(e){
      setColor((currentData) => !currentData)
    }
    const data = []
    Users.forEach((user) => {
      data.push(
        <div className="header" key={user.id}>
        <div className="header__logo">

        </div>
        <ul className="header__ul">
            <li>Home</li>
            <li>About</li>
            <li>{user.Name}</li>
        </ul>
        <button className={isDark ? 'header__button' : 'header__button--active'} onClick={swipeColor}>Изменить Фон</button>
    </div>
      )})
    // })
//    const res = [];
//    for(let i = 0;i < Users.length;i++){
//     const el = Users[i];
//     res.push(
//         <li>{el.Name}</li>
//     )
//    };

// const res = Users.reduce((res, el) => {
//     res.push(
//         <li>{el.Name}</li>
//     )
//     return res
// },[]);
const [info, setData] = useState({name:'', password: '',});

function logInfo(e) {
  e.target.value = e.target.value.replace(/\d/g, "");
  setData((currentData) => {
    return{ ...currentData,
     name: e.target.value
    }
})
}

function logInfo2(e){
  setData((value) => {
    return{
    ...value,
    password: e.target.value,
    }
  })
}

    return (
      <div>
        {data}
        <input type="text" placeholder="Введите имя" onChange={logInfo}  />
        <input type="password" placeholder="Введите пароль" onChange={logInfo2}/>
        <p>Name:{info.name}</p>
        <p>Password:{info.password}</p>
      </div>
      
    )
}

// function generateKey(user){
//     return `${user.id}_${user.Name}_${user.passport}`
// }
//функция чтобы генерировать ключи но обычно идет id 
//ключ используется только в циклах где данные изменаются чтобы не перерисововать их
//заново для оптимизации 
export default Header