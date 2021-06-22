// npm install bootstrap reactstrap
// npm install --save react-bootstrap

import React, { Component } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import RenderMap from './renderMap';


class App extends Component{
        
        
        state = {
                theme: null,
                nameMap: null,
                dropdownOpen: false
        }
        
        toggleDropdown = () => {
                this.setState({dropdownOpen: !this.state.dropdownOpen});
        }

        resetTheme = evt => {
                evt.preventDefault();
                this.setState({ theme: null});
                this.setState({ nameMap: null});
        }

        changeBtn = (theme, nameMap, evt) => {
                evt.preventDefault();
                this.setState({ theme });
                this.setState({ nameMap });
                //this.setState({ nameMap: nameMap});
                
                console.log(nameMap);
                //console.log(this.state.theme);
                //console.log(this.state.nameMap);
        }

        render() {
                const { theme, dropdownOpen} = this.state;
                const themeClass = theme? theme.toLowerCase() : 'secondary';

                const nameMap = this.state.nameMap;
               

                return(
                        <div >
                                
                                <div className="d-flex flex-wrap justify-content-center align-items-center">
                                        <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>
                                                {nameMap || 'แผนที่แสดงจุดค่าแรงดันท่อประปา'}
                                        </span>

                                        <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggleDropdown}>
                                                <DropdownToggle caret size="sm" color={themeClass}/>
                                                <DropdownMenu>
                                                        <DropdownItem onClick={e => this.changeBtn('Primary','June2020', e)}>June2020</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Success','July2020', e)}>July2020</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Danger','August2020', e)}>August2020</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Warning','September2020', e)}>September2020</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Info','October2020', e)}>October2020</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Light','November2020', e)}>November2020</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Dark','December2020', e)}>December2020</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Warning','January2021', e)}>January2021</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Info','February2021', e)}>February2021</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Light','March2021', e)}>March2021</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={e => this.changeBtn('Dark','April2021', e)}>April2021</DropdownItem>
                                                        <DropdownItem divider/>
                                                        <DropdownItem onClick={this.resetTheme}>Pipe-line</DropdownItem>
                                                </DropdownMenu>
                                        </ButtonDropdown>
                                        
                                </div>
                                <br/>
                                
                                <RenderMap myId={this.state.nameMap}/> 
                                
                        </div>
                                
                )
        }
}

export default App;