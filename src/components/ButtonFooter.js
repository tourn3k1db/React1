import PropTypes from 'prop-types'

const ButtonFooter = ({color,text,onClick}) => {

    return (
    <button
    onClick={onClick}
    style={{backgroundColor:color}}
    className = 'btn'>
    {text}
    </button>
    )
}


ButtonFooter.defaultProps = {
    color:'green',
}

ButtonFooter.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default ButtonFooter
