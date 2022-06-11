import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { menu } from '../data/menu'
import '../style/menu.css'
import { CardsMenu } from './CardsMenu'


export const Menu = () => {
  const [menuFood, setMenuFood] = useState(menu);



  const filterFood = (filt) => {
    setMenuFood(menu.filter((menuFilter) => menuFilter.categoria === filt))
  }
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
            <CardsMenu key={food.id} value={food} />
          ))}
      </section>

    </div>
  )
}
