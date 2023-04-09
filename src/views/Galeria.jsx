import React, { useContext }from 'react';
import MyContext from "../MyContext";
import { Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';


const Galeria = () => {
  const {products, handlerSearching, priceFilter, changeState, searchConcept} = useContext(MyContext);  

  //console.log(priceFilter)
  console.log(handlerSearching)
 

  if( changeState === 0 ) {
    return (
      <div className="galeryEdit">
        <div className="sideGalery">
          <Sidebar />
        </div>
        <Container>
          <Row sm={3} md={3} lg={3}>
          {products.map(producto =>
          < Cards id={producto.idproducto} imagen={producto.imagen} titulo={producto.titulo} precio={producto.precio} />)
          }
          </Row>
        </Container>
      </div>
    )} 
    if( changeState === 1 && handlerSearching !== [] ) {
      return (
        <div className="galeryEdit">
          <div className="sideGalery">
            <Sidebar />
          </div>
          <Container>
            <Row sm={3} md={3} lg={3}>
            {handlerSearching.map(prod =>
            < Cards id={prod.idproducto} imagen={prod.imagen} titulo={prod.titulo} precio={prod.precio} />)
            }
            </Row>
          </Container>
        </div>
      )} 
      if( changeState === 2  ) {
        return (
          <div className="galeryEdit">
            <div className="sideGalery">
              <Sidebar />
            </div>
            <Container>
              <Row sm={3} md={3} lg={3}>
              {priceFilter.map(p =>
              < Cards id={p.idproducto} imagen={p.imagen} titulo={p.titulo} precio={p.precio} />)
              }
              </Row>
            </Container>
          </div>
        )}

            }
 
export default Galeria;