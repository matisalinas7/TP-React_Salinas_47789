import './../../assets/styles/footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section" id="our-company">
          <h2>Our Company</h2>
          <p>Some information about your company</p>
        </div>
        <div className="footer-section" id="contact">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <p>Email: miempresa@gmail.com</p>
            </li>
            <li>
              <p>Phone: 123456-789</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

