import React from "react";
import NavBar from "./../NavBar/NavBar";
import "./contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./../Footer/Footer";
import mapUbicacion from "./../../assets/Mapa.png";

function Contact() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="headingContact">Contáctenos</h1>
        <div className="main">
          <div className="form-contact">
            <Form>
              <Form.Group className="mb-2 input-names">
                <div>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" id="name" className="input-datos" />
                </div>
                <div>
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control
                    type="text"
                    id="apellidos"
                    className="input-datos"
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" id="name" />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" row={4} />
              </Form.Group>

              <Button variant="primary" type="submit" className="enviar-msg">
                Enviar
              </Button>
            </Form>
          </div>
          <div className="map-contact">
            <div className="section-info">
              <h5>
                Restaurante <b>Fast Food</b>
              </h5>
              <p className="text-direction">(43) 51-9274</p>
              <p className="text-direction">Calle 55 #5609-A e/56 y 58</p>
              <p>La Juanita, Cienfuegos, Cuba</p>
              <div>
                <img
                  src={mapUbicacion}
                  alt="Mapa Ubicación"
                  className="map-imagen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
