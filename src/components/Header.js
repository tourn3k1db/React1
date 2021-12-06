import PropTypes from 'prop-types'
import Button from "./Button.js"


const Header = ({maintitle}) => {
    const onClick = () => {
    }
    return (
        <header>
            <h1>{maintitle}</h1>
            <Button text="Button1" onClick={onClick}/>


        </header>

    )
}

Header.defaultProps = {
    maintitle:"Hello World Title 3.0",
}

Header.propTypes = {
    maintitle:PropTypes.string.isRequired,
}

export default Header









// const Header = ({maintitle}) => {
//     const onClick = () => {
//     }
//         return (
//             <header>
//                 <h1>{maintitle}</h1>
//                 <Button color="green" text="YouMe" onClick={onClick}/>
//             </header>
//         )
//     }
    
// Header.defaultProps = {
//     maintitle:"Title 3.0",
// }

// Header.propTypes = {
//     maintitle:PropTypes.string.isRequired,
// }
// export default Header

// const Header = ({maintitle}) => {
//     const onClick = () => {
//         console.log('click click')
//     }
//     return (
//         <header className='Header'>
//            <h1>{maintitle}</h1> 
//            <Button color='green' text='Button1' onClick={onClick}/>
//            <Button color="blue" text='Button2' onClick={onClick}/>
//            <Button color='yellow' text='Button3' onClick={onClick}/>
//         </header>
// //     )
// // }

// Header.defaultProps = {
// maintitle: 'The Task Tracker 2.0',
// }

// Header.propTypes = {
// maintitle: PropTypes.string.isRequired,
// }

// export default Header

//---------------------------

// const Header = ({maintitle}) => {
//     const onClick = () => {
//     }
//     return (
//         <header>
//             <h1>{maintitle}</h1>
//             <Button color = "Blue" text ="Hello" onClick={onClick}/>
//         </header>
//     )
//     }
    
