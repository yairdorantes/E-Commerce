import "./styles/footer.scss";
import card from "../media/credit.png";
import box from "../media/box.png";
import shield from "../media/shield.png";
const Footer = () => {
  return (
    <>
      <footer className="container-footer">
        <div className="flex-box">
          <div className="info-footer">
            <img className="icon-footer" src={card} alt="" />
            <div>
              <strong>Comfortable Payment</strong>
            </div>

            <div className="mini-info-footer">
              Con Mercado Pago, paga con tarjeta, débito o efectivo. También
              puedes pagar en hasta 12 mensualidades sin tarjeta con Mercado
              Crédito.
            </div>
          </div>
          <div className="info-footer">
            <img className="icon-footer" src={box} alt="" />
            <div>
              <strong>Safe shipping</strong>
            </div>
            <div className="mini-info-footer">
              Tienes envío gratis en millones de productos seleccionados.
              Aplican condiciones.
            </div>
          </div>
          <div className="info-footer">
            <img className="icon-footer" src={shield} alt="" />
            <div>
              <strong>Secure Purchases</strong>
            </div>
            <div className="mini-info-footer">
              ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no
              puedas hacer, porque estás siempre protegido.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
