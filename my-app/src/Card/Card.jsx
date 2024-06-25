import React, {useState} from "react";
import './index.css'
import Logo from './logo-ts.webp'
function Card(){
let [count, switchCount] = useState(0)
let price = 180 + (180 * count);

function priceUp(){
    switchCount((value) => (
        ++value
     ))
   
}
function priceDown(){
    if(count > 0){
    switchCount((value) => --value)
    }

}
    return (
        <div className="Card">
            <div className="Card__description">
            <img src={Logo} />
            <p>Описание</p>
            </div>
            <div className="Card__price">
                <p>Ценна:{price}руб</p>
                <button className="Card__price__buttonUp" onClick={priceUp}>
                    +
                </button>
                    <p>{count}</p>
                <button className="Card__price__buttonDown" onClick={priceDown}>
                    -
                </button>
            </div>

        </div>
    )
}

export default Card