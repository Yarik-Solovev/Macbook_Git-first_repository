import React from "react";
import UsersName from "./UserName";
import './index.css'


function Header(){
  function changeName(id, newName){
    Users = Users.map(user => {
      if(user.id === id){
        return {
          ...user,
          Name:newName
        } 
      }
      return user
    })
    }
   let Users = [
    {Name: 'Alex', id: '1', passport:'123'},
    {Name:'Ivan', id: '2', passport:'52'}
    ];
    const data = []
    Users.forEach((user) => {
      data.push(
        <div key={user.id} className="userSpan">
            <UsersName 
            User={user.Name}
            changeName={changeName}
            />
        </div>
      
      )
    })
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
           {data}
        </ul>
        <button className="header__button" onChange={(event) => {console.log(event);}}>Просто кнопка</button>
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