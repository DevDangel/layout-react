import '../assets/styles/AboutUs.css';
import about from '../assets/imgs/about.jpg';

const AboutUs = () => {
    return(
        <section className='about-us'>
            <div className="text-about">
                <h2>About us</h2>
                <p>Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.</p>
                <ul>
                    <li>
                        <i className='bi bi-diagram-3'></i>
                        <div className="li">
                            <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                            <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                        </div>
                    </li>
                    <li>
                        <i className='bi bi-fullscreen-exit'></i>
                        <div className="li">
                            <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                            <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                        </div>
                    </li>
                    <li>
                        <i className='bi bi-broadcast'></i>
                        <div className="li">
                            <h5>Voluptatem et qui exercitationem</h5>
                            <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="video">
                <img src={about} alt="" />
                <a href="" className='glightbox pulsating-play-btn'></a>
            </div>
        </section>
    );
}

export default AboutUs;