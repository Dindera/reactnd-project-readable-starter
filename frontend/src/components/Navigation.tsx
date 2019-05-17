import * as React from 'react';
import { Navbar, Nav, NavDropdown, DropdownButton } from 'react-bootstrap'

export interface NavigationProps {
  categories: []
}

export default class Navigation extends React.Component<NavigationProps, any> {

  public render() {
    const { categories } = this.props
    
    return (
      <div>
      <Navbar bg="white" variant="light">
      <Navbar.Brand href="#home">Readable</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
            { categories.map((categori: any) => (
            <NavDropdown.Item  key={categori.name}>{categori.name.charAt(0).toUpperCase()+ categori.name.slice(1)}</NavDropdown.Item>
            ))
             }
          </NavDropdown>

      <Nav.Link href="#users">Leader Board</Nav.Link>
      </Nav>
      </Navbar>
      </div>
    );
  }
}
