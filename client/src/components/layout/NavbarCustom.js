import React, { Component } from "react";
import { Container,Row,Col, Navbar } from 'react-bootstrap'

import { Link } from "react-router-dom";
import './Style.scss';

class NavbarCustom extends Component {
  constructor(props) {
        super(props);
        this.state = {
            activeClasses: [],
            indexval: 0,
            log: localStorage.getItem("jwtToken")
        };
        this.addActiveClass = this.addActiveClass.bind(this);
    }

    addActiveClass(index) {
      let activeClasses = []


        switch(index) {
          case 0:
            activeClasses = [true, false, false, false]
            break;
          case 1:
            activeClasses = [false, true, false, false]
            break;
          case 2:
            activeClasses = [false, false, true, false]
            break;
          case 3:
            activeClasses = [false, false, false, true]
            break;
          default:
            activeClasses = [true, false, false, false]
            break;
          }
          this.setState({activeClasses, index});
        }

  render() {
    const activeClasses = this.state.activeClasses.slice();
    return (
        <Container fluid className="topnav">
            <div className="banner">
                <img className="unt-banner img-fluid" alt={ 'University of North Texas logo' } src={ require('./unt-banner.svg') }/>
            </div>
            <Row className="header">
                <Col className="title-text">
                    <span className="text-white">University of North Texas</span>
                    <h3 className="title">Research and Project Portal</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Navbar>
                        <Link to="/" className={activeClasses[0]? "active" : "inactive"} onClick={() => this.addActiveClass(0)} >Home</Link>
                        <Link to="/login" className={activeClasses[1]? "active" : "inactive"} onClick={() => this.addActiveClass(1)} >Login</Link>
                        <Link to="/signup" className={activeClasses[2]? "active" : "inactive"} onClick={() => this.addActiveClass(2)} >Sign up</Link>
                        <Link to="/projects" className={activeClasses[3]? "active" : "inactive"} onClick={() => this.addActiveClass(3)} >Projects</Link>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
  }
}
export default NavbarCustom;
