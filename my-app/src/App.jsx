import React from "react";
import './index.css'

function Header(){
   const Users = [
    {Name: 'Alex', id: '1', passport:'123'},
    {Name:'Ivan', id: '2', passport:'52'}
    ];

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

    return (
    <div className="header">
        <div className="header__logo">

        </div>
        <ul className="header__ul">
            <li>Home</li>
            <li>About</li>
            {Users.map(el => {
                return (
                <div key={el.id}>
                     <li>{el.Name}</li>
                </div>
                )
            })}
        </ul>
        <button className="header__button">Просто кнопка</button>
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