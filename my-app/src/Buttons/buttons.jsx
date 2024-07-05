import './index.css'


export default function Buttons({active, onChange}){
    return (
        <section>
        <button onClick={() => onChange('info')} className={active === 'info' ? ('Button--active') : ('Button')}>О нас</button>
        <button onClick={() => onChange('contact')} className={active === 'contact' ? ('Button--active') : ('Button')}>Контакты</button>
        </section>
    )
}