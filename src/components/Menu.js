import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { menu } from '../data/menu'
import { createLocalS } from '../helpers/cartLocalStorage'
import '../style/menu.css'
import { CardsMenu } from './CardsMenu'
import { ModalDescrip } from './ModalDescrip'


export const Menu = () => {

  const [menuFood, setMenuFood] = useState(menu);
  const [showModal, setShowModal] = useState(false);
  const [infoModal, setInfoModal] = useState([])

  const filterFood = (filt) => {
    setMenuFood(menu.filter((menuFilter) => menuFilter.categoria === filt))
  }


  const openModal = () =>{
    setShowModal(!showModal)
  }
  const infoM = (v) =>{
    setInfoModal(v);
  }
  useEffect(() => {
    createLocalS()
  }, [])



  return (
    <div className='mt-5 pt-2' >
      <div className='divFix'>
        <Nav variant="tabs" className='text-light filterNav'>
          <Nav.Item>
            <Nav.Link className='' onClick={() => { setMenuFood(menu) }}>
              Todos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { filterFood('bebidas') }}>
              Bebidas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { filterFood('carnes') }}>
              Carne
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { filterFood('postres') }}>
              Postres
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { filterFood('comidas_rapidas') }}>
              Comidas Rapidas
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <section className="layout">
        {
          menuFood.map((food) => (
            <CardsMenu key={food.id} value={food} modal={openModal} info={infoM}/>
          ))}
      </section>
            <ModalDescrip open={showModal} set={openModal} info={infoModal}/>
    </div>
  )
}
