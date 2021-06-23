import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import RenderMap from './renderMap'

class NavbarComp extends Component {

    state = {
        theme: null,
        nameMap: null,
        NavDropdown: false
    }

    resetTheme = evt => {
        evt.preventDefault();
        this.setState({ theme: null });
        this.setState({ nameMap: null });
    }

    changeBtn = (theme, nameMap, evt) => {
        evt.preventDefault();
        this.setState({ theme });
        this.setState({ nameMap });

        console.log(nameMap);
    }

    render() {
        

        return(
            
        
        <div>    
                <div>
                    <Navbar bg = "lg" expand = "lg">
                        <Navbar.Brand >Interpolation</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">

                                <NavDropdown title="Years" id="basic-nav-dropdown" >
                                    <NavDropdown title="2020" id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={e => this.changeBtn('Primary', 'June2020', e)}> June 2020</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Success', 'July2020', e)}>July 2020</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Danger', 'August2020', e)}>August 2020</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Info', 'September2020', e)}>September 2020</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Light', 'October2020', e)}>October 2020</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'November2020', e)}>November 2020</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'December2020', e)}>December 2020</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                    <NavDropdown title="2021" id="basic-nav-dropdown">    
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'January2021', e)}>January 2021</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'February2021', e)}>February 2021</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'March2021', e)}>March 2021</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'April2021', e)}>April 2021</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                    <NavDropdown.Item onClick={this.resetTheme}>Pipe</NavDropdown.Item>
                                </NavDropdown>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </div>
                <RenderMap myId={this.state.nameMap} />
            </div>
        )
    }
}

export default NavbarComp;