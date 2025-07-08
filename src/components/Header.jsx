import '../assets/styles/Header.css';

const Header = () => {
    return (
        <header className='header-main'>
            <div className="nav-header">
                <div className="title-nav">
                    <h1>Angel Inc</h1>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#team">TEAM</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><input type="text" placeholder='Buscar...'/></li>
                    </ul>
                    <a href="#" className="btn-nav">
                    <span>Get Started</span>
                    </a>
                </nav>
            </div>
            <div className="img-header">
                <h1>Online Presence with Bethany</h1>
                <p>We are team of talented designers making websites with Bootstrap</p>
                <a href="">Get Started</a>
            </div>
        </header>
    );
}

export default Header;