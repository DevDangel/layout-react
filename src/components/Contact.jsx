import '../assets/styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="title-contact">
                <h2>Contact</h2>
                <div className="line"></div>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="main-contact">
                <div className="direction">
                    <div className="group-direction">
                        <i className="bi bi-geo-alt flex-shrink-0"></i>
                        <div className="text">
                            <h3>Address</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    <div className="group-direction">
                        <i className="bi bi-telephone flex-shrink-0"></i>
                        <div className="text">
                            <h3>Call Us</h3>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                    <div className="group-direction">
                        <i className="bi bi-envelope flex-shrink-0"></i>
                        <div className="text">
                            <h3>Email Us</h3>
                            <p>angeldavidh18@gmail.com</p>
                        </div>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1406.4084297435927!2d-75.18280536507281!3d4.425306767398731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1751926108106!5m2!1ses!2sco" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="form">
                    <form class="form-grid">
                        <div>
                        <label for="name">Your Name</label>
                        <input type="text" id="name" name="name" />
                        </div>
                        <div>
                        <label for="email">Your Email</label>
                        <input type="email" id="email" name="email" />
                        </div>
                        <div class="full-width">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" />
                        </div>
                        <div class="full-width">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5"></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Contact;
/**
 .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      max-width: 600px;
      margin: auto;
      font-family: sans-serif;
    }

    .form-grid label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    .form-grid input,
    .form-grid textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .form-grid .full-width {
      grid-column: span 2;
    }

    .form-grid button {
      grid-column: span 2;
      padding: 12px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }
 */