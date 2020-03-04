import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const AllNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">NJSG</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/AboutUs">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Schedule">Schedule</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Instructors">Instructors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Pools">Pools</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/appointments">Appointments</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText> <a href="#">Sign In</a></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AllNav;

