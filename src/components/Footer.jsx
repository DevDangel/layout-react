import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <section className="footer">
            <div className="info">
                <div className="text">
                    <h2>Bethany</h2>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                   
                    <div className="social">
                        <a href=""><i className='bi bi-twitter-x'></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>     
                    <div className="links">
                        <p>UserFul Links</p>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Services</a></li>    
                            <li><a href="">Terms of service</a></li>    
                            <li><a href="">Privacy policy</a></li>    
                        </ul>
                    </div>
                    <div className="our-services">
                        <p>Our Services</p>
                        <ul>
                            <li><a href="">Web Desing</a></li>
                            <li><a href="">Web Development</a></li>
                            <li><a href="">Product Management</a></li>    
                            <li><a href="">Marketing</a></li>    
                            <li><a href="">Graphic Design</a></li> 
                        </ul>
                    </div>
                    <div className="contac-us">
                        <p>Contact Us</p>
                        <p>A108 Adam Street New York, NY 535022 United States</p><br />
                        <p><span>Phone:</span>+1 5589 55488 55</p>
                        <p><span>Email:</span>info@example.com</p>
                    </div>
            </div>
            <div className="footer-fn">
                <p>© Copyright Bethany All Rights Reserved</p>
                <div className="credits">
                    <p>Desing by <span><a href="">Angel Herrera</a></span></p>
                </div>
            </div>
        </section>
    );
}

export default Footer;