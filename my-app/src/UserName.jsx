import React from "react";

function Users(props){
    return(
        props.User === 'Ivan' ? (
            <li>{props.User}</li>
        ) :(
            <li>{props.User}</li>
        )
    )
}

export default Users