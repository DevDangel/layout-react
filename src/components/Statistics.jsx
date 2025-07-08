import '../assets/styles/Statistics.css';

const Statistics = () => {
    return (
        <section className='statistics'>
            <div className="rowy">
                <div className="numbers">
                    <span>232</span>
                    <p>Client</p>
                </div>
                <div className="numbers">
                <span>521</span>
                <p>Projects</p>
                </div>
                <div className="numbers">
                    <span>1453</span>
                    <p>Hours Of Support</p>
                </div>
                <div className="numbers">
                    <span>32</span>
                    <p>Workers</p>
                </div>
            </div>    
        </section>
    );
}

export default Statistics;