import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './NavBar.css'



export default function NavBar() {
  const [activeKey, setActiveKey] = useState('/todo');

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey)
  }

  return (
    <Nav className='nav-bar' activeKey={activeKey} onSelect={handleSelect}>
      <div className='nav-bar-header'>
        <h2>React/Redux ToDo List</h2>
      </div>
      <div className='nav-link-container'>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/todo" eventKey={"/todo"}>Todos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/about" eventKey={"/about"}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/contact" eventKey={"/contact"}>Contact</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  )
}
