import '../assets/styles/Team.css';
import team1 from '../assets/imgs/team/team-1.jpg';
import team2 from '../assets/imgs/team/team-2.jpg';
import team3 from '../assets/imgs/team/team-3.jpg';
import team4 from '../assets/imgs/team/team-4.jpg';
const Team = () => {
    return(
        <section className="team">
            <div className="title-team">
                <h2>Team</h2>
                <div className="line"></div>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="main-team">
                <div className="group-team">
                    <img src={team1} alt="" />
                    <h4>Walter White</h4>
                    <p>Web Development</p>
                    <div className="social">
                        <a href=""><i className='bi bi-twitter-x'></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="group-team">
                      <img src={team2} alt="" />
                    <h4>Sarah Jhinson</h4>
                    <p>Marketing</p>
                    <div className="social">
                        <a href=""><i className='bi bi-twitter-x'></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="group-team">
                      <img src={team3} alt="" />
                    <h4>William Anderson</h4>
                    <p>Content</p>
                    <div className="social">
                        <a href=""><i className='bi bi-twitter-x'></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="group-team">
                      <img src={team4} alt="" />
                    <h4>Amanda Jepson</h4>
                    <p>Accountant</p>
                    <div className="social">
                        <a href=""><i className='bi bi-twitter-x'></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Team;