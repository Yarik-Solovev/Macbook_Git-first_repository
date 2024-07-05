import React, {useState} from "react"
import Buttons from "../Buttons/buttons"
import Info from "./Info/info"
import Contact from "../Contact/contact"
export default function App() {
    const [tab, setTab] = useState('info')
    return (
        <>
         <Buttons active={tab} onChange={(current) => setTab(current)} />
         {tab === 'info' &&(
            <Info/>
        )}
        {tab === 'contact' &&(
            <Contact/>
        )}
        
    </>   
    )
}