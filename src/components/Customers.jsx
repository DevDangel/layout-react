    import '../assets/styles/Customers.css';
    import client1 from '../assets/imgs/clients/client-1.png';
    import client2 from '../assets/imgs/clients/client-2.png';
    import client3 from '../assets/imgs/clients/client-3.png';
    import client4 from '../assets/imgs/clients/client-4.png';
    import client5 from '../assets/imgs/clients/client-5.png';
    import client6 from '../assets/imgs/clients/client-6.png';

    const Customers = () => {
        return (
            <section className='customers'>
                <div className="inline">
                    <img src={client1} alt=""  width={100}/>
                    <img src={client2} alt="" width={100}/>
                    <img src={client3} alt="" width={100}/>
                    <img src={client4} alt="" width={100}/>
                    <img src={client5} alt="" width={100}/>
                    <img src={client6} alt="" width={100}/>
                </div>
            </section>
        );
    }
    export default Customers;