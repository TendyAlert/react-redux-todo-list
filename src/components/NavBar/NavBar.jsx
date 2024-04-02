import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './NavBar.css'



export default function NavBar() {
  const [activeKey, setActiveKey] = useState('/');

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey)
  }

  return (
    <Nav className='nav-bar' activeKey={'/'} onSelect={handleSelect}>
      <div className='nav-bar-header'>
        <h2>React/Redux ToDo List</h2>
      </div>
      <div className="nav-link-container">
        <Router className="nav-links">
          <Nav.Item><Nav.Link to="/" eventKey={"/"}>Todos</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link to="/about" eventKey={"/about"}>About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link to="/contact" eventKey={"/contact"}>Contact</Nav.Link></Nav.Item>
        </Router>
      </div>
    </Nav>
  )
}
