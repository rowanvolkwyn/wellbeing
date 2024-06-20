import logo from '../assets/wellbeing-logo.png';

const Navbar = () => {
    
    return (
        <div id='navbar'>
            <div id='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Podcasts</a></li>
                    <li><a href="#">Stories</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;