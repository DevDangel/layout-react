import '../assets/styles/Portfolio.css';
import app1 from '../assets/imgs/portfolio/app-1.jpg';      
import app2 from '../assets/imgs/portfolio/app-2.jpg';  
import app3 from '../assets/imgs/portfolio/app-3.jpg';
import product1 from '../assets/imgs/portfolio/product-1.jpg';
import product2 from '../assets/imgs/portfolio/product-2.jpg';
import product3 from '../assets/imgs/portfolio/product-3.jpg';
import branding1 from '../assets/imgs/portfolio/branding-1.jpg';
import branding2 from '../assets/imgs/portfolio/branding-2.jpg';    
import branding3 from '../assets/imgs/portfolio/branding-3.jpg';
import books1 from '../assets/imgs/portfolio/books-1.jpg';
import books2 from '../assets/imgs/portfolio/books-2.jpg';
import books3 from '../assets/imgs/portfolio/books-3.jpg';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="title-portfolio">
                <h2>Portfolio</h2>
                <div className="line"></div>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="nav-list-portfolio">
                <ul>
                    <li><a href="">All</a></li>
                    <li><a href="">App</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Branding</a></li>
                    <li><a href="">Books</a></li>
                </ul>
            </div>
            <div className="main-portfolio">
                <div className="group-img">
                    <img src={app1} alt="" />
                    <div className="footer-img">
                        <a href="">App 1</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="group-img">
                    <img src={product1} alt="" />
                    <div className="footer-img">
                        <a href="">Product 1</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="group-img">
                    <img src={branding1} alt="" />
                    <div className="footer-img">
                        <a href="">Branding 1</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="group-img">
                    <img src={books1} alt="" />
                    <div className="footer-img">
                        <a href="">Books 1</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="group-img">
                    <img src={app2} alt="" />
                    <div className="footer-img">
                        <a href="">App 2</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="group-img">
                    <img src={product2} alt="" />
                    <div className="footer-img">
                        <a href="">Product 2</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="group-img">
                    <img src={branding2} alt="" />
                    <div className="footer-img">
                        <a href="">Branding 2</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="group-img">
                    <img src={books2} alt="" />
                    <div className="footer-img">
                        <a href="">Books 2</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="group-img">
                    <img src={app3} alt="" />
                    <div className="footer-img">
                        <a href="">App 3</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="group-img">
                    <img src={product3} alt="" />
                    <div className="footer-img">
                        <a href="">Product 3</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="group-img">
                    <img src={branding3} alt="" />
                    <div className="footer-img">
                        <a href="">Branding 3</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="group-img">
                    <img src={books3} alt="" />
                    <div className="footer-img">
                        <a href="">Books 3</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;