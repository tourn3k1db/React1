import PropTypes from 'prop-types'
import ButtonFooter from './ButtonFooter.js'

const Footer = ({mainfooter}) => {
    const onClick= () => {
        console.log('click bottom')
    }
    return (
        <footer className='Footer'>
         <h1>{mainfooter}</h1> 
         <ButtonFooter color='green' text="HelloBottom" onClick={onClick}/>  
        </footer>
    )
}



Footer.defaultProps = {
    mainfooter: 'This is Footer 2.0',
}

Footer.propTypes = {
    mainfooter: PropTypes.string.isRequired,
}

export default Footer
