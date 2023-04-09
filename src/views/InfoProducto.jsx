import React, { useContext }  from "react";
import MyContext from "../MyContext";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";


const InfoProducto = () => {
  const { products } = useContext(MyContext);
  const { id } = useParams();
  //console.log(products)
  console.log(id)

  //const prueba = products.find((prod) => prod.idproducto === id);
  //const getId = products.map((info) => info.idproducto);

  
  //console.log(prueba);
  
  return (
    <div>
      {products.filter((pro) => (pro.idproducto == id) ).map((info) => (
      <div className="contenedor m-5" key={info.idproducto} >
        <Container>
          <h3>{info.titulo}</h3>
          <Row>
            <Col>
              <img src={info.imagen} alt="imagen de referencia"/> 
            </Col>
            <Col>              
              <p className="descrip">Descripción:{info.descripcion}</p>              
              <p className="fw-bold fs-2">Precio:${info.precio}</p>
              <p className="fw-bold fs-2">Correo de contacto:{info.correoproducto}</p>
              <p className="fw-bold fs-2">Telefono de contacto{info.telefonoproducto}</p>      
            </Col>
          </Row>
        </Container>
      </div>)
      )}
      <Link to={"/galeria/"}><Button>Regresar a Galeria</Button></Link>
    </div>
  );
};

export default InfoProducto;