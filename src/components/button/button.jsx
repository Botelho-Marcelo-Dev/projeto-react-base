import "./button.css"
const alerta = (props) => {
    alert("A label do Button é " + props.label)
}

const Button = (props) => {
    return <button className="btn" onClick={() => alerta(props)}>{props.label}</button>
}

export default Button