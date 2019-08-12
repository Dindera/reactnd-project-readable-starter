import * as React from 'react';
import { Navbar, Nav, NavDropdown, DropdownButton } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom"

export interface NavigationProps {
  categories: []
}

export default class Navigation extends React.Component<NavigationProps, any> {

  public render() {
    const { categories } = this.props
    
    return (
      <div>
      <Navbar bg="white" variant="light">
      <Navbar.Brand>Readable</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown as={NavLink} to='#'  title="Categories" id="basic-nav-dropdown">
            { categories.map((categori: any) => (
            <NavDropdown.Item as={NavLink} key={categori.name} to={`/${categori.name}/posts`}>{categori.name.charAt(0).toUpperCase()+ categori.name.slice(1)}</NavDropdown.Item>
            ))
             }
          </NavDropdown>

      <Nav.Link as={NavLink} to='/leaderboard'>Leader Board</Nav.Link>
      </Nav>
      </Navbar>
      </div>
    );
  }
}
