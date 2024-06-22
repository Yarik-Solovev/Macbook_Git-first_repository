import React from "react";
import './index.css'


function Header(){
  const [_, forceUpdate] = React.useReducer(x => x + 1, 0);
 
   let Users = [
    {Name: 'Alex', id: '1', passport:'123',age: 20},
  
    ];
    const data = []
    Users.forEach((user) => {
      function changeName(id, newName){
        Users = Users.map(user => {
          if(user.id === id){
            return {
              ...user,
              Name:newName
            } 
          }
          forceUpdate()
          return user
        })
        }
      function onClick(){
        changeName(user.id, 'Admin')
        
        console.log(Users)
      }
      data.push(
        <div className="header" key={user.id}>
        <div className="header__logo">

        </div>
        <ul className="header__ul">
            <li>Home</li>
            <li>About</li>
            <li>{user.Name}</li>
        </ul>
        <button className="header__button" onClick={onClick}>Изменить Имя</button>
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

    return (
      <div>
        {data}
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