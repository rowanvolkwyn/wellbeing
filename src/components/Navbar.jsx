import logo from '../assets/wellbeing-logo.png';

const Navbar = () => {
    
    return (
        <div id='navbar'>
            <div id='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">PODCASTS</a></li>
                    <li><a href="#">STORIES</a></li>
                    <li><a href="#">SERVICES</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;