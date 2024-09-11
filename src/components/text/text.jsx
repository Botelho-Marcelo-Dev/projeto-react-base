import './text.css';
const changeUpperCase = (props) => {
    console.log(props.label.toUpperCase());
}

const StyledP = (props) => {
    return (
        <p className='pUsado' style={{ color: props.color }} onClick={() => changeUpperCase(props)}>
            {props.label.toUpperCase()}
        </p>
    );
};

export default StyledP;