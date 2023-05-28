import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <ul className='NavBar'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/productList">Products</Link>
            </li>
        </ul>
    )
}

export default NavBar;