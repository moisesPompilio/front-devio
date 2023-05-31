import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer py-5 bg-dark">
      <div className="container">
        <div className="footer-content text-white grid">
          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">Links</h6>
            <ul>
              <li>
                <a
                  href="https://github.com/moisesPompilio/front-devio"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Repositorie Front
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moisesPompilio/api-devio"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Repositorie API
                </a>
              </li>
              <li>
                <a
                  href="https://api-devio.onrender.com/docs"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moisesPompilio"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Developer Repository
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">conheça a Devio</h6>
            <ul>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="fs-15"
                >
                  Company Info
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="fs-15"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Store
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">Contato do criador dessa pargina</h6>
            <ul>
              <li>
                <span>
                  <i className="fas fa-phone" />
                </span>
                <span className="fs-15">(91)987420521</span>
              </li>
              <li>
                <span>
                  <i className="fas fa-envelope" />
                </span>
                <span className="fs-15">moisesalexandrep.c@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
