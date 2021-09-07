import React, { useState } from "react";
import "./footer.css";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import swell from "sweetalert";

const Footer = () => {
  let [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handdleSubmitEmail = (e) => {
    if (email !== "") {
      e.preventDefault();
      swell({
        text: "Se ha subscrito satisfactoriamente.",
        icon: "success",
        buttons: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="main-footer">
      <div className="container">
        <div className="footerGeneral">
          {/* Column 1 */}
          <div className="footerInfo">
            <div className="easyInfo left">
              <h6 className="section-block">
                Lunes-Sábado
                <span className="heading-span">11AM-11PM</span>
              </h6>
              <h6 className="section-block">
                Domingo
                <span className="heading-span">11AM-3PM</span>
              </h6>
            </div>
            <div className="easyInfo right">
              <h6 className="section-block">
                <a className="phone" href="tel:42519274">
                  (43) 51-9274
                </a>
                <span className="heading-span">
                  Calle 55 #5109-A e/Ave 56 y 58
                </span>
              </h6>
            </div>
          </div>
          {/* Column 2 */}
          <div className="infoForm">
            <p>
              Si quieres estar al tanto de todas las novedades de nuestro menú y
              servicios en oferta entonces, regístrese gratuitamente a nuestra
              lista de correo a través del siguiente formulario.
            </p>
            <p>Subscríbete:</p>
            <form className="formEmail">
              <label htmlFor="input-email">Correo Electronico</label>
              <input
                id="input-email"
                type="email"
                name="email"
                value={email}
                placeholder="Correo Electrónico"
                className="inputEmail"
                onChange={handleChange}
                required
              />
              <button
                className="btn btn-outline-warning btnEmail"
                type="submit"
                onClick={handdleSubmitEmail}
              >
                Enviar
              </button>
            </form>
          </div>
          {/* Column 3 */}
          <div className="footerRedes">
            <h6 className="section-block-redes">
              <span className="heading-span">SIGUENOS</span>
              <a
                href="https://instagram.com"
                target="_parent"
                className="refIcon"
              >
                <i>
                  <FiInstagram />
                </i>
              </a>
              <a
                href="https://facebook.com"
                target="_parent"
                className="refIcon"
              >
                <i>
                  <FiFacebook />
                </i>
              </a>
              <a
                href="https://twitter.com"
                target="_parent"
                className="refIcon"
              >
                <i>
                  <FiTwitter />
                </i>
              </a>
            </h6>
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Fast Food - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
