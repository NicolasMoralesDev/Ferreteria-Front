import "./footer.css"
const Footer = () => {


  return (
    <footer className="footer text-light back position-relative bottom-0 p-4" style={styles.footer}>
      <div className="container-fluid">
        <div className="row cntainer-fluid d-flex flex-row justify-content-center">

          <div className="col-lg-4">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3 className="text-center">Links</h3>
              <ul>
                <li><a className="link-light" href="/">Home</a></li>
                <li><a className="link-light" href="/login">Ingresar</a></li>
                <li><a className="link-light" href="/ayuda">Ayuda</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3 className="text-center">Contacto</h3>
              <ul>
                <ul>Email:
                  <li>infocorralon@corralononline.com</li>
                </ul>
                <ul>WhatsApp:
                  <li>+54 9 2364 38-0471</li>
                  <li>+54 9 236 451-9612</li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3 className="text-center">Nuestras Redes</h3>

                <ul>Instagram:
                <li> @corralontelollevo</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center m-2">
          <p className="fs-6 text-wrap">© Copyright 2024 - Desarrollado por Luno y Neuro Marketing</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

const styles = {
  footer: {
    textWrap: "balance",
    marginTop: 'auto',
    width: '100%',
  }
}