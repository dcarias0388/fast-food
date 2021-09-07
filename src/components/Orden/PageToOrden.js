import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./topage.css";
import { connect } from "react-redux";
import {
  addOrden,
  deleteFromCart,
  totalAcc,
} from "./../../redux/actions/cartAction";
import { FaTrashAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { FcCalendar, FcShipped, FcShop } from "react-icons/fc";
import { Collapse } from "reactstrap";
import NavBar from "./../NavBar/NavBar";
import Swal from "sweetalert2";
import codigoQr from "./../../assets/qr-code.png";

function PageToOrden({ shoppingCart, deleteFromCart, total, addOrden }) {
  const history = useHistory();

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  let arrayHora = [];
  let arrayMinutes = [];

  for (let i = 1; i < 13; i++) {
    arrayHora.push(i);
  }

  for (let j = 0; j < 60; j++) {
    if (j < 10) arrayMinutes.push("0" + j);
    else arrayMinutes.push(j);
  }

  let [date, setDate] = useState(today);
  let [hora, setHora] = useState("");
  let [open, setOpen] = useState(false);
  let [metodo, setMetodo] = useState("");
  let [openQr, setOpenQr] = useState(false);
  let [tipoPago, setTipoPago] = useState("");

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeHour = (e) => {
    setHora(e.target.value);
  };

  const selectRecoger = () => {
    setOpen(true);
    setMetodo("recoger");
  };

  const selectEntregar = () => {
    setOpen(true);
    setMetodo("entregar");
  };

  const setPago = (e) => {
    setTipoPago(e.target.value);
  };

  const handdleSubmit = (e) => {
    if (shoppingCart && shoppingCart.length !== 0) {
      if (
        open === true &&
        (tipoPago === "Efectivo" || tipoPago === "Transferencia")
      ) {
        Swal.fire({
          text: "Su pedido se ha recibido satisfactoriamente.",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
        });
        e.preventDefault();
        addOrden();
        history.push("/tablets");
      } else {
        Swal.fire({
          text: "Especifique el método de entrega y de pago.",
          icon: "warning",
          showConfirmButton: false,
          timer: 3000,
        });
        e.preventDefault();
      }
    } else {
      Swal.fire({
        text: "No existen tablets en su orden.",
        icon: "warning",
        showConfirmButton: false,
        timer: 3000,
      });
      e.preventDefault();
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <h2 className="form-header">¡Gracias por elegirnos!</h2>
        <p className="form-p">
          Una vez seleccionado el Menú, le mostramos la Orden generada, asi como
          los datos que necesita llenar para poder confirmar el pedido y el pago
          del mismo. Esperamos disfrute de nuestro servicio de Fast Food.
        </p>
        <div className="formulario">
          <Form onSubmit={handdleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                Nombre y Apellidos<span className="form-required">*</span>
              </Form.Label>
              <div className="form-name">
                <Form.Control
                  type="text"
                  className="input-name"
                  placeholder="Nombre"
                  required
                />
                <Form.Control
                  type="text"
                  className="input-lastname"
                  placeholder="Apellidos"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Email<span className="form-required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                className="input-email"
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                Nunca compartiremos su correo electrónico con nadie más.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Móvil<span className="form-required">*</span>
              </Form.Label>
              <div className="form-movil">
                <Form.Control
                  type="text"
                  className="input-zona"
                  placeholder="+53"
                  required
                />
                <span className="input-group-addon">-</span>
                <Form.Control type="text" className="input-movil" required />
              </div>
            </Form.Group>

            <div className="linea"></div>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: "20px" }}>
                Menú
              </Form.Label>
              <div className="container-md">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Tablet</th>
                      <th>Cantidad</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  {shoppingCart.map((tablet) => {
                    return (
                      <tbody key={tablet.id}>
                        <tr>
                          <td>{tablet.tablet}</td>
                          <td>{tablet.qty}</td>
                          <td>{tablet.qty * tablet.precio}</td>
                          <td className="text-center">
                            {" "}
                            <button
                              className="botonElimOrden"
                              onClick={() => deleteFromCart(tablet.id)}
                            >
                              <FaTrashAlt
                                style={{ width: "20px", height: "20px" }}
                              />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </Table>
                <span className="form-total">
                  <b>
                    <span className="total-text">Total:</span>
                    <span className="total-price">
                      {total} <MdAttachMoney />
                    </span>
                  </b>
                </span>
              </div>
            </Form.Group>

            <div className="linea"></div>

            <Form.Group className="mb-3">
              <Form.Label>
                ¿Cuándo quiere su pedido?
                <span className="form-required">*</span>
              </Form.Label>

              <div className="calendar">
                <div className="group-calendar">
                  <Form.Control
                    type="date"
                    defaultValue={date}
                    className="input-calendar"
                    min={date}
                    onChange={handleChangeDate}
                    required
                  />
                  <i className="imgCalendar">
                    <FcCalendar />{" "}
                  </i>
                  <Form.Text className="text-muted">Día</Form.Text>
                </div>

                <div className="group-hour">
                  <Form.Select
                    className="selectHour"
                    value={hora}
                    onChange={handleChangeHour}
                    required
                  >
                    <option></option>
                    {arrayHora.map((h) => (
                      <option value={h} key={h}>
                        {h}
                      </option>
                    ))}
                  </Form.Select>
                  <p style={{ marginLeft: "10px" }}>:</p>
                  <Form.Select className="selectHour" required>
                    <option></option>
                    {arrayMinutes.map((m) => (
                      <option value={m} key={m}>
                        {m}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Select className="selectHour">
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </Form.Select>
                  <Form.Text className="text-muted text-positH">Hora</Form.Text>
                  <Form.Text className="text-muted text-positM">
                    Minutos
                  </Form.Text>
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-3 selector">
              <Form.Label>
                ¿Recogida o entrega?<span className="form-required">*</span>
              </Form.Label>
              <div className="group-check">
                <Form.Check
                  type="radio"
                  label="Recoger"
                  onClick={selectRecoger}
                  aria-controls="collapse-recoger"
                  aria-expanded={open}
                  name="chekOrden"
                  id="chekOrden1"
                />
                <i style={{ marginLeft: "5px" }}>
                  <FcShop />
                </i>
              </div>
              <div className="group-check">
                <Form.Check
                  type="radio"
                  label="Entregar"
                  onClick={selectEntregar}
                  aria-controls="collapse-entregar"
                  aria-expanded={open}
                  name="chekOrden"
                  id="chekOrden2"
                />
                <i style={{ marginLeft: "5px" }}>
                  <FcShipped />
                </i>
              </div>

              <Collapse isOpen={open} className="colapse">
                {metodo !== "" && metodo === "recoger" ? (
                  <div id="collapse-recoger">
                    <h3>¡Excelente! Puede recoger su pedido en:</h3>
                    <br />
                    <p>Calle 55 #5609A e/ Avenida 56 y 58, Cienfuegos.</p>
                  </div>
                ) : metodo !== "" && metodo === "entregar" ? (
                  <div id="collapse-entregar">
                    <h3>¡Excelente! Especifique la dirección de entrega:</h3>
                    <Form.Control as="textarea" rows={3} />
                  </div>
                ) : (
                  ""
                )}
              </Collapse>
            </Form.Group>

            <div className="linea"></div>

            <Form.Group className="mb-3">
              <Form.Label>
                Método de Pago<span className="form-required">*</span>
              </Form.Label>
              <div className="checkPagar">
                <div onChange={setPago}>
                  <Form.Check
                    type="radio"
                    label="Efectivo"
                    name="chekPago"
                    id="chekPago1"
                    value="Efectivo"
                    onChange={() => setOpenQr(false)}
                  />
                  <Form.Check
                    type="radio"
                    label="Transferencia"
                    name="chekPago"
                    id="chekPago2"
                    value="Transferencia"
                    onChange={() => setOpenQr(true)}
                  />
                </div>
                <Collapse isOpen={openQr}>
                  <img src={codigoQr} alt="Código QR" className="image-qr" />
                </Collapse>
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="btnAceptar">
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.cartReducer.shoppingCart,
    total: state.cartReducer.total,
  };
};

export default connect(mapStateToProps, { deleteFromCart, totalAcc, addOrden })(
  PageToOrden
);
